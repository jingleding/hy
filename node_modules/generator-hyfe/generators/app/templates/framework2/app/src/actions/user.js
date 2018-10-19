
import * as actionType from '../constants/actionType'
// import requestURL from '../constants/requestURL'
import api from '../api'
import { push } from 'react-router-redux'
import { saveCookie, getCookie, signOut } from '../util/authUtil'

export const showMsg = (content, type = 'error') => {
  return {
    type: actionType.SHOW_ERROR_MSG,
    message: {
      content,
      type
    }
  }
}

/**
 * 登录成功后要触发的action
 * 
 * @param {any} token 登录成功标识
 * @returns action
 */
function loginSuccess(token) {
  return {
    type: actionType.LOGIN_SUCCESS,
    token: token
  }
}

/**
 * 登录时候触发的action
 * 
 * @export
 * @param {any} userInfo 登录用户信息
 * @returns
 */
export function localLogin(userInfo) {
  return (dispatch, getState) => {
    return api.localLogin(userInfo)
      .then(response => ({
        json: response.data,
        status: response.statusText
      }))
      .then(({json, status}) => {
        console.log('登录信息', json, status)
        if(status !== 'OK') {
          return dispatch(showMsg(json.msg || '登录失败'))
        }
        
        //密码或用户名错误
        if(json.code !== 0) {
          return dispatch(showMsg(json.msg || '登录失败'))
        }

        //获取token，并存储
        saveCookie('token', json.token)

        //获取用户信息
        dispatch(getUserInfo(json.token))
        dispatch(loginSuccess(json.token))
        dispatch(showMsg('登录成功', 'success'))

        //路由跳转
        dispatch(push('/index'))
      }).catch(err => {
        //登录失败
        return dispatch(showMsg(err.data.error_msg || '登录失败'))
      })
  }
}

/**
 * 根据cookie中的token信息获取用户信息
 * 
 * @export
 * @param {any} token 用户登录信息
 * @returns
 */
export const getUserInfo = (token = getCookie('token')) => {
  return {
    type: actionType.GET_USERINFO,
    promise: api.getUserInfo(token)
  }
}

/**
 * 用户退出登录
 * 
 * @export
 * @returns
 */
export function logout() {
  return dispatch => {
    //用户退出登录后，清除cookie中的登录标识，返回到登录页面
    signOut()
    dispatch(push('/login'))
  }
}
