import * as actionType from '../constants/actionType'
import api from '../api'
import { getCookie } from '../util/authUtil'

/**
 * 加载所有公司公告列表，先不分页，后面内容多了需要添加分页
 * 
 * @returns action
 */
export const loadNewsList = () => {
  return {
    type: actionType.LOAD_NEW_LIST,
    promise: api.getNewsList()
  }
}

/**
 * 加载公告详情
 * 详细描述：
 * action返回如下对象：
 * {
 *  type: actionType.NEWS_DETAIL,
    promise: api.getNewsDetail(id)
 * }
 * 和以下写法的作用是类似的：
 * return (dispatch, getState) => {
    return api.getNewsDetail(id)
      .then(response => ({
        json: response.data,
        status: response.statusText
      }))
      .then(({ json, status }) => {
        let news = json
        return dispatch({
          type: actionType.NEWS_DETAIL_SUCCESS,
          response: news
        })
      }).catch(error => {
        return dispatch({
          type: actionType.NEWS_DETAIL_FAILURE
        })
      })
    }
 * 
 * @returns action
 * @param {string} id 公告ID
 */
export const loadNewsDetail = (id) => {
  return {
    type: actionType.NEWS_DETAIL,
    promise: api.getNewsDetail(id)
  }
}

export const loadNewsDetail1 = (id) => {
  return (dispatch, getState) => {
    return api.getNewsDetail(id)
      .then(response => ({
        json: response.data,
        status: response.statusText
      }))
      .then(({ json, status }) => {
        let news = json
        return dispatch({
          type: actionType.NEWS_DETAIL_SUCCESS,
          response: news
        })
      }).catch(error => {
        return dispatch({
          type: actionType.NEWS_DETAIL_FAILURE
        })
      })
  }
}

export const loadNavs = (token = getCookie('token')) => {
  return {
    type: actionType.LOAD_NAVS,
    promise: api.getNavs(token)
  }
}

export const uploadUserInfo = (data) => {
  return {
    type: actionType.UPLOAD_FILE,
    promise: api.uploadUserInfo(data)
  }
}