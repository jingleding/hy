
import {
  LOGIN_SUCCESS,
  LOGOUT_USER,
  GET_USERINFO_SUCCESS,
  SHOW_ERROR_MSG
}  from '../constants/actionType'
import { getCookie } from '../util/authUtil'
import assign from 'object-assign'

let initialState = {
  token: getCookie('token') || null,
  user: null,
  message: {}
}
export default function (state = initialState, action) {
  switch(action.type) {
    case LOGIN_SUCCESS:
      return assign({}, state, { token: action.token})
    case LOGOUT_USER:
      return assign({}, state, { token: null})
    case SHOW_ERROR_MSG:
      return assign({}, state, { message: action.message})
    case GET_USERINFO_SUCCESS:
      return assign({}, state, { user: action.response})
    default:
      return state
  }
}
