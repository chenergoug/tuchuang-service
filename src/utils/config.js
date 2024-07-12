// 异常请求统一处理
const UnusualRequest = function (err) {
  return {
    code: 500,
    success: false,
    message: err.message
  }
}
const SucceedRequest = function (data) {
  return {
    code: 200,
    message: '创建成功',
    data
  }
}

module.exports = {
  UnusualRequest,
  SucceedRequest
}
