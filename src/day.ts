import dayjs from 'dayjs'

/** 格式化时间戳（秒|毫秒）*/
export const timeFilter = (value: string) => {
  if (value) {
    if (value.length === 13) {
      return dayjs(Number(value)).format('YYYY-MM-DD HH:mm:ss')
    }
    return dayjs.unix(Number(value)).format('YYYY-MM-DD HH:mm:ss')
  } else {
    return '-'
  }
}

/** 格式化日期(日) */
export const dayFilter = (value: string) => {
  if (value) {
    if (value.length === 13) {
      return dayjs(Number(value)).format('YYYY-MM-DD')
    }
    return dayjs.unix(Number(value)).format('YYYY-MM-DD')
  } else {
    return '-'
  }
}

/** 格式化倒计时展示 */
const timestampFormat = (second: number) => {
  if (second) {
    let hours = Math.floor(second / 3600)
    second = second - hours * 3600
    let mimute = Math.floor(second / 60)
    second = second - mimute * 60

    return ('0' + hours).slice(-2) + ':' + ('0' + mimute).slice(-2) + ':' + ('0' + second).slice(-2)
  } else {
    return '00:00:00'
  }
}

export default {
  timeFilter,
  dayFilter,
  timestampFormat,
}
