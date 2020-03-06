/** 手机号码 */
export const validateMobilePhone = (value: string) => {
  return /^1\d{10}$/.test(value)
}

/** 电话号码 */
export const validateTelphone = (value: string) => {
  return /^(([0+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/.test(value)
}

/** 身份证号 */
export const validateIDNumber = (value: string) => {
  return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(value)
}

/** 银行卡号 */
export const validateBankNo = (value: string) => {
  return /^([1-9]{1})(\d{14}|\d{18})$/.test(value)
}

/** 邮编 */
export const validatePostCode = (value: string) => {
  return /^(([0+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/.test(value)
}

/** email邮箱 */
export const validateEmail = (value: string) => {
  return /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(value)
}

/** 输入项必须为英文字母和数字 */
export const validateInputEnAndNumber = (value: string) => {
  return new RegExp('^[A-Za-z0-9]+$').test(value)
}

/** 输入项必须是整数 */
export const validateInteger = (value: number) => {
  return value % 1 !== 0
}

/** 不能输入特殊字符 */
export const validateChar = (value: string) => {
  return new RegExp("[`~!@%#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]").test(value)
}

export default {
  validateMobilePhone,
  validateTelphone,
  validateIDNumber,
  validateBankNo,
  validatePostCode,
  validateEmail,
  validateInputEnAndNumber,
  validateInteger,
  validateChar,
}
