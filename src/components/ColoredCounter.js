import React, { Component } from 'react'
import Counter from './Counter'

export default class ColoredCounter extends Component {
  constructor(props) {
    super(props)
    this.state = { color: '#f00' }
    this.changeColor = this.changeColor.bind(this)
  }
  changeColor(event) {
    this.setState({
      color: event.target.value,
    })
  }
  render() {
    return (
      <div id="counter">
        <select name="color" onChange={this.changeColor}>
          <option value="#f00">red</option>
          <option value="#0f0">green</option>
          <option value="#00f">blue</option>
        </select>
        <Counter color={this.state.color} />
      </div>
    )
  }
}
