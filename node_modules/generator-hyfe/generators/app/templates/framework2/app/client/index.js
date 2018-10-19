import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router'

import configureStore from 'src/store/configureStore'
import createRoutes from './routes'
import { Provider } from 'react-redux'
import _ from 'lodash'
import { syncHistoryWithStore } from 'react-router-redux'

let initialState = {}
console.log('initialState1=' + JSON.stringify(window.__INITIAL_STATE__))
if (window.__INITIAL_STATE__) {
  try {
    let plain = JSON.parse(JSON.stringify(window.__INITIAL_STATE__))
    
    _.each(plain, (val, key)=> {
      initialState[key] = val
    })

    console.log('initialState1=' + plain)
  } catch (e) {
    console.log('JSON.parse faild')
  }
}

const store = configureStore(initialState, browserHistory)
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render((
  <Provider store={store}>
    { createRoutes(history) }
  </Provider>
), document.getElementById('container'))
