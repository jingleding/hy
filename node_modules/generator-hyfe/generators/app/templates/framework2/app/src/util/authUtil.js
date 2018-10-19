import cookie from 'react-cookie'

let cookieConfig = {}

/**
 * 设置cookie值
 * 
 * @export
 * @param {string} name cookie名称
 * @param {any} value 值
 */
export function saveCookie(name, value) {
    cookie.save(name, value)
}

/**
 * 获取到名称为name的cookie值
 * 
 * @export
 * @param {string} name cookie名称
 * @returns cookie值
 */
export function getCookie(name) {
    return cookie.load(name)
}


/**
 * 删除cookie
 * 
 * @export
 * @param {string} name cookie名称
 */
export function removeCookie(name) {
    cookie.remove(name)
}


/**
 * 登录用户退出登录，清空cookie中的token值
 * 
 * @export
 */
export function signOut() {
    cookie.remove('token')
}

/**
 * 判断用户是否登录，根据是否存在token的cookie判断
 * 用户登录后，会存一个名称为token的cookie
 * 
 * @export
 * @returns true or false
 */
export function isLogin() {
    return !!cookie.load('token')
}


/**
 * 用户已登录，则跳过登录页面
 * 
 * @export
 * @param {any} nextState
 * @param {any} replaceState
 */
export function redirectToBack(nextState, replaceState) {
    //已经登录
    if(isLogin()) {
        replaceState('/index')
    }
}


/**
 * 用户没有登录，访问其他页面时，直接跳到登录页面
 * 
 * @export
 * @param {any} nextState
 * @param {any} replaceState
 */
export function redirctToLogin(nextState, replaceState) {
    if(!isLogin()) {
        replaceState('/login')
    }
}