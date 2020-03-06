/** 下载文件 */
export const downloadFile = (url: string) => {
  try {
    let _elemIF = document.createElement('iframe')
    _elemIF.src = url
    _elemIF.style.display = 'none'
    document.body.appendChild(_elemIF)
  } catch (e) {
    console.error(e)
  }
}

export default {
  downloadFile,
}
