import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadNewsDetail } from '../actions/home'
import { bindActionCreators } from 'redux'

const styles = {
  container: {
    width: 235,
    margin: '0 auto',
    marginTop: 120
  }
}
function mapStateToProps (state) {
  debugger
  return { item: state.home.newsDetail }
}

@connect(mapStateToProps, {loadNewsDetail})
export default class ItemContainer extends Component {
  componentDidMount() {
    let { id } = this.props.params
    const { loadNewsDetail } = this.props
    loadNewsDetail(id)
  }
  render() {
    let { item } = this.props
    return (
      <div style={styles.container}>
        <h2>专辑详情</h2>
        <p>名称：{ item.name }</p>
        <p>发行时间: {item.release_date} </p>
        <p>类型： {item.type}</p>
        <img src={item.cover} />
      </div>
    )
  }
}

