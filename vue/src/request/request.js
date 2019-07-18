import axios from 'axios'

// 全局错误处理
// const handleErrorRequest = (error) => {
//   let response = error.response;
//   let status =  response ? response.status : 0;
//   let data = response ? response.data : {};
//   let errors = data.errors || {};
//   let message = data.msg || '请求发送失败~';
//   console.log('golbalerror', error)
// }

// 添加一个请求拦截器（ 一般用于鉴权 )


// 添加响应拦截器
/* [请求库]
** @params url         { string }   @default => '' [接口地址，统一在global/resource文件中]
** @params data/params { object }   @default => {} [发送数据]
** @params config      { object }   配置
*/

export default {
  post: function (url='', data={}, config) {
    return axios.post(url, data, config);
  },

  put: function (url='', data={}, config) {
    return axios.put(url, data, config);
  },

  get: function (url, data={}, config) {
    let OPTIONS = Object.assign({ data }, config);
    return axios.get(url, OPTIONS)
  },

  delete: function (url='', data={}, config) {
    let OPTIONS = Object.assign({ data }, config);
    return axios.delete(url, OPTIONS)
  }
}