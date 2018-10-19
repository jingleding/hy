
import { LOAD_NEW_LIST_SUCCESS,
  NEWS_DETAIL_FAILURE,
  NEWS_DETAIL_SUCCESS, LOAD_NAVS_SUCCESS } from '../constants/actionType'
import assign from 'object-assign'

let initialState = {
  isFetching: false,
  items: [],
  newsDetail: {},
  navs: []
}

export default function (state = initialState, action) {
  switch(action.type) {
    // case LOAD_NEW_LIST_REQUEST:
    //   return assign({}, state, {isFetching: true})
    case LOAD_NEW_LIST_SUCCESS:
      return assign({}, state, {items: action.response})
    case NEWS_DETAIL_SUCCESS:
      return assign({}, state, {newsDetail: action.response})
    case NEWS_DETAIL_FAILURE:
      break;
    case LOAD_NAVS_SUCCESS:
      return assign({}, state, {navs: action.response})
    default:
      return state
  }
} 