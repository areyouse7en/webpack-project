export default {
  baseURL: '/api',
  before(config) {
    // 缓存的userToken
    // const {
    //   access_token
    // } = store2('userToken') || {}
    // config.headers['Authorization'] = access_token
    // return config
  },
  after(res) {
    // 如果http状态码正常，则直接返回数据
    if (res.status >= 200 && res.status < 400) {
      if (res.data.code == 203) {
        console.warn('登录超时')
      }
      return res.data
    } else {
      // 异常状态
      return {
        code: -404,
        success: false,
        msg: '网络错误'
      }
    }
  }
}