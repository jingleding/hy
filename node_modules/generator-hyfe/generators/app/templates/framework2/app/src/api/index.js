require('es6-promise').polyfill()
import axios from 'axios'
import { getCookie, signOut } from '../util/authUtil'
import baseConfig from '../../../config'
import reqURL from '../constants/requestURL'
const { API_BASE_URL } = baseConfig
const { LOGIN_URL, LOAD_USER_URL, 
  LOAD_NEWSLIST_URL,
  LOAD_NEWS_DETAIL_URL,
  LOAD_NAVS_URL,
  UPLOAD_USERINFO_URL } = reqURL

//axios.defaults.baseURL = API_BASE_URL
axios.defaults.withCredentials = true

// Add a request interceptor
axios.interceptors.request.use(function(config) {
  config.headers = config.headers || {}
  if(getCookie('token')) {
    config.headers.Authorization = 'hyoa ' + getCookie('token').replace(/(^\")|(\"$)/g, '')
  }
  return config
}, function(error) {
  return Promise.reject(error)
})

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data
    if(response.status === 401) {
      signOut()
      window.location.pathname = '/login'
    }
    return response
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  })

/**
 * 使用axios调用后台接口，所有请求的方法暂时都放这里
 * @autor baizn
 */
export default {
  
  /**
   * 验证时候，通过用户名和密码查询数据库中是否有相应的数据
   * @param {object} 登录用户名和密码的对象
   * @returns 查询结果
   */
  localLogin: function(data) {
    debugger
    return axios.post(LOGIN_URL, data)
  },

  /**
   * 使用token查询用户信息
   * @param {string} token 登录后存在cookie中的token信息
   * @returns promise对象，调用then方法后，获取查询到的数据
   */
  getUserInfo: function(token) {
    return axios.get(LOAD_USER_URL + '/' + token, {
      headers: {
        Authorization: `hyoa ${token}`
      }
    })
  },

  /**
   * 查询所有公告，暂时不分页
   * @param {}
   * @returns promise对象，调用then方法后，获取查询到的数据
   */
  getNewsList: function(data) {
    return axios.get(LOAD_NEWSLIST_URL, data)
  },

  /**
   * 使用公告ID查询公告内容
   * @param {string} id 公告ID
   * @returns promise对象，调用then方法后，获取查询到的数据
   */
  getNewsDetail: function(id) {
    return axios.get(LOAD_NEWS_DETAIL_URL + '/' + id)
  },

  /**
   * 根据当前登录用户信息，获取用户OA系统首页导航列表
   * @param {string} token 登录用户标识
   * @returns promise对象，调用then方法后，获取查询到的数据
   */
  getNavs: function(token) {
    return axios.get(LOAD_NAVS_URL + '/' + token)
  },
  uploadUserInfo: function(data) {
    return axios.post(UPLOAD_USERINFO_URL, data)
  }
}