// main file for react js

// need to export the jsx so it can be picked up by index.js and bundled correctly
import axios from 'axios'
import React from 'react'

export default class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      officeQuote: {}
    }
    console.log('this is the empty state', this.state)
  }

  async componentDidMount () {
    const {data} = await axios.get('https://officeapi.dev/api/quotes/random')
    console.log('this is what is being fetched',data)
    this.setState({officeQuote: data})
  }

  render(){
    return (
      <div id="main" className="header">
      <h4>{this.state.officeQuote}</h4>
      </div>
    )
  }

}
