import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

function mapStateToProps(state) {
  return {}
}

@connect(mapStateToProps)
export default class Default extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={{height: '100%'}}>
        {this.props.children}
      </div>
    )
  }
}