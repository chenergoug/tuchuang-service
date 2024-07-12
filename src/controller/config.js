// 异常请求统一处理
const UnusualRequest = function (err) {
  return {
    code: 500,
    success: false,
    message: err.message
  }
}

module.exports = {
  UnusualRequest
}
