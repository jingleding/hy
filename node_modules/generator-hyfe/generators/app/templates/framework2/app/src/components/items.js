import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

const styles = {
  ptext: {
    color: '#fff'
  },
  ds: {
    float: 'left',
    paddingLeft: '80px'
  }
}
export default class Items extends Component {
  render() {
    let albums = this.props.items
    return (
      <div>
        {
          albums.map((a)=> {
            let id = a.id
            return (
              <div key={id} style={styles.ds}>
                <p style={styles.ptext}>专辑名：{a.name}</p>
                <Link to={`/index/list/${id}`}>
                  <img src={a.cover} />
                </Link>
              </div>
            )
          })
        }
      </div>
    )
  }
}

// Items.propTypes = {
//   items: PropTypes.instanceOf(List).isRequired
// }
