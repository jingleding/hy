
/**
 * 统一返回格式
 */
let RestResult = function() {
  this.code = RestResult.NO_ERROR,
  this.result = {}
  this.msg = ''
}

//无错误
RestResult.NO_ERROR = 0
//无效参数错误  
RestResult.ILLEGAL_ARGUMENT_ERROR_CODE = 1
//业务错误
RestResult.BUSINESS_ERROR_CODE = 2
//认证错误
RestResult.AUTH_ERROR_CODE = 3
//服务器未知错误
RestResult.SERVER_EXCEPTION_ERROR_CODE = 4
//目标不存在错误  
RestResult.TARGET_NOT_EXIT_ERROR_CODE = 5

export default RestResult