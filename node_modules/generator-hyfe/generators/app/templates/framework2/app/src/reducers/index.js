import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import user from './user'
import home from './home'

const rootReducer = combineReducers({
  user,
  home,
  routing: routerReducer
})

export default rootReducer
