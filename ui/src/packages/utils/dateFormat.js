import {
  isString,
  isNumber,
  isDate,
  includes,
} from 'lodash';

function transDate(date) {
  if (isDate(date)) {
    return date;
  }
  if (isString(date) && includes(date, 'T')) {
    return new Date(date.replace('T', ' '));
  }
  if (isString(date) || isNumber(date)) {
    if (/^\d+$/.test(date)) {
      const newDate = new Date();
      newDate.setTime(parseInt(date, 10));
      return newDate;
    }
    return new Date(date);
  }
  return new Date();
}

export function dateFormat(time = new Date(), format = '%Y-%M-%D %H:%I:%S') {
  const newDate = transDate(time);
  const milliseconds = newDate.getMilliseconds();
  const hours = newDate.getHours();
  const fullHours = hours < 10 ? (`0${hours}`) : hours;
  const isHasHours = hours === 0 ? '' : `${fullHours}:`;
  const timeType = hours >= 12 ? '下午' : '上午';
  const tHours = hours > 12 ? hours - 12 : hours;
  const reHours = tHours < 10 ? (`0${tHours}`) : tHours;
  const fullYear = newDate.getFullYear();
  const year = fullYear.toString().substr(2);
  const trueMonth = newDate.getMonth() + 1;
  const fullMonth = trueMonth < 10 ? (`0${trueMonth}`) : trueMonth;
  const date = newDate.getDate();
  const fullDate = date < 10 ? (`0${date}`) : date;
  const minutes = newDate.getMinutes();
  const fullMinutes = minutes < 10 ? (`0${minutes}`) : minutes;
  const seconds = newDate.getSeconds();
  const fullSeconds = seconds < 10 ? (`0${seconds}`) : seconds;
  const weekCn = (['日', '一', '二', '三', '四', '五', '六'])[newDate.getDay()];
  const weekEn = (['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'])[newDate.getDay()];
  const reg = /(%[YyMmDdAaHBhIiSsTtWwx]{1})/g;
  return format.replace(reg, (w) => {
    const it = w.replace('%', '');
    if (it === 'Y') {
      return fullYear;
    }
    if (it === 'y') {
      return year;
    }
    if (it === 'M') {
      return fullMonth;
    }
    if (it === 'm') {
      return trueMonth;
    }
    if (it === 'D') {
      return fullDate;
    }
    if (it === 'd') {
      return date;
    }
    if (it === 'A') {
      return timeType;
    }
    if (it === 'H') {
      return fullHours;
    }
    if (it === 'B') {
      return isHasHours;
    }
    if (it === 'h') {
      return hours;
    }
    if (it === 't') {
      return tHours;
    }
    if (it === 'T') {
      return reHours;
    }
    if (it === 'I') {
      return fullMinutes;
    }
    if (it === 'i') {
      return minutes;
    }
    if (it === 'S') {
      return fullSeconds;
    }
    if (it === 's') {
      return seconds;
    }
    if (it === 'x') {
      return milliseconds;
    }
    if (it === 'W') {
      return weekCn;
    }
    if (it === 'w') {
      return weekEn;
    }
    return '';
  });
}

export function timeFormat(time, format) {
  const dt = new Date('01/01/2000 0:00');
  dt.setSeconds(Math.abs(time) / 1000);
  return dateFormat(Date.parse(dt), format);
}
