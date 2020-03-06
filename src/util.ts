/**
 * 过滤请求参数 如果为空则不传递
 * @param {*} params
 */
export const filterAvailParams = (params = {}) => {
  let _filterParams = {}

  for (let key in params) {
    let data = params[key]
    if (Array.isArray(data) && data.length > 0) {
      _filterParams[key] = data
    } else if (Object.prototype.toString.call(data) === '[object Object]' && Object.keys(data).length > 0) {
      _filterParams[key] = data
    } else if (Object.prototype.toString.call(data) === '[object Boolean]') {
      _filterParams[key] = data
    } else if (
      (Object.prototype.toString.call(data) === '[object Number]' ||
        Object.prototype.toString.call(data) === '[object String]') &&
      data
    ) {
      _filterParams[key] = data
    }
  }

  return _filterParams
}

export default {
  filterAvailParams,
}
