import React, { Component } from 'react'

export class Form extends Component {

  state = {
    name: 'Biba',
    count: 0
  }

  handleChange = (event) => {
    // console.log(event.target.value)
    this.setState({ name: event.target.value })
  }

  handleClick = (event) => {
    // console.log(event.target.value)
    this.setState({ count: this.state.count + 1 })
    // this.setState((prevState) => ({ count: prevState.count + 1 }))
  }

  render () {
    return (
      <>
        <input type="text" onChange={this.handleChange} />
      </>
    )
  }
}