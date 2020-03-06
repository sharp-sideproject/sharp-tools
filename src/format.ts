/** 手机号格式化-中间四位隐藏 */
export const formatMiddlePhoneNum = (phone: string) => {
  return phone.substr(0, 3) + '****' + phone.substr(7, 11)
}

/** 格式化银行卡-4位一空格 */
export const formatBank = (bankNo: string) => {
  if (bankNo) {
    return bankNo.replace(/\s/g, '').replace(/(.{4})/g, '$1 ')
  }
}

/** 千分位格式化-千位加一逗号 */
const formatThousandsNum = (val: string) => {
  let num = val,
    result = ''

  while (num.length > 3) {
    result = ',' + num.slice(-3) + result
    num = num.slice(0, num.length - 3)
  }
  if (num) {
    result = num + result
  }
  return result
}

export default {
  formatMiddlePhoneNum,
  formatBank,
  formatThousandsNum,
}
