// setting up for api routing to the office quotes api
const axios  = require("axios");
const morgan  = require("morgan");
const express = require('express')
const volleyball = require('volleyball')
const app = express()
module.exports = app

// body parsing middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// logging middleware for requests
app.use(morgan('dev'))
app.use(volleyball)

// static assets
app.use(express.static(path.join(__dirname, '..', 'public')))

// Sends our index.html (the "single page" of our SPA)
app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})

// app.get('/', async (req,res, next) =>{
//   const {quote} = await axios.get('https://officeapi.dev/api/quotes/random')
//   res.send(quote)
// })

app.use((req, res, next) => {
  if (path.extname(req.path).length > 0) {
    res.status(404).end()
  } else {
    next()
  }
})


app.use((err, req, res, next) => {
  console.error(err, typeof next)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})
