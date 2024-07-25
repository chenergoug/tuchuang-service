// 异常请求统一处理
const UnusualRequest = function (data, text) {
  return {
    code: 500,
    message: text || '未知错误',
    data
  }
}
const SucceedRequest = function (data, text) {
  return {
    code: 200,
    message: text || '请求成功',
    data
  }
}

module.exports = {
  UnusualRequest,
  SucceedRequest
}
