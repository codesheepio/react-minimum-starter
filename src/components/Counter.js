import React, { Component } from 'react'

export default class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = { counter: 0 }
    this.count = this.count.bind(this)
  }
  count() {
    this.setState({
      counter: this.state.counter + 1,
    })
  }
  render() {
    return (
      <div id="counter" style={{ color: this.props.color }}>
        <div>
          {this.state.counter}
        </div>
        <input type="button" value="+" onClick={this.count} />
      </div>
    )
  }
}
Counter.defaultProps = {
  color: '#000',
}
