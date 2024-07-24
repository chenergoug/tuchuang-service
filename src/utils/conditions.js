class UtilConditions {
  // 登录成功
  async M_AccreditSuccess() {
    return {
      code: 200,
      message: '登录成功',
      data: null
    }
  }
  // 登录失败
  async M_AccreditFailure(text) {
    return {
      code: 401,
      message: text || '登录失败',
      data: null
    }
  }
  // 系统内部错误
  async M_ServerError() {
    return {
      code: 500,
      message: '系统内部错误',
      data: null
    }
  }
}

module.exports = new UtilConditions()
