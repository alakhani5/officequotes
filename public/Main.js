// main file for react js

// need to export the jsx so it can be picked up by index.js and bundled correctly
import axios from 'axios'
import React from 'react'

export default class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      officeQuote: []
    }
    console.log('this is the empty state', this.state)
  }

  async componentDidMount () {
    const data = await axios.get('/')
    console.log('this is what was fetched',data)
    let quote = this.state
    // quote.push(data)
    // console.log('this is the quote fetched in an array',quote)
    // this.setState({officeQuote: data})
  }

  render(){
    return (
      <div id="main" className="header">
        <h1> this is where office quotes would be...</h1>
        <h2>IF THEY WORKED</h2>
      <h4>{this.state.officeQuote}</h4>
      </div>
    )
  }

}
