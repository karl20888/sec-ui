import { padEnd } from 'lodash';

export function round(number = 0, fractionDigits = 2, padZero = false) {
  const n = parseFloat(number) + 0.0000000001;
  const p = 10 ** fractionDigits;
  const re = Math.round(n * p) / p;
  if (padZero) {
    const [integer, decimal] = `${re}`.split('.');
    return `${integer}.${padEnd(decimal, fractionDigits, '0')}`;
  }
  return re;
}

export function ceil(number, fractionDigits = 2) {
  return Math.ceil(number * (10 ** fractionDigits)) / (10 ** fractionDigits);
}

export function floor(number, fractionDigits = 2) {
  return Math.floor(number * (10 ** fractionDigits)) / (10 ** fractionDigits);
}

function calc(numA, numB) {
  const a = Number(numA);
  const b = Number(numB);
  if (a || b) {
    let ra;
    let rb;
    try {
      ra = a.toString().split('.')[1].length;
    } catch (e) {
      ra = 0;
    }
    try {
      rb = b.toString().split('.')[1].length;
    } catch (e) {
      rb = 0;
    }
    const r = 10 ** Math.max(ra, rb);
    return [a, b, r, ra, rb];
  }
  return [0, 0, 0, 0, 0];
}

export function multi(a, b) {
  const base = calc(a, b);
  if (base[2]) {
    return (
      Number(base[0].toString().replace('.', ''))
      * Number(base[1].toString().replace('.', ''))
    ) / (10 ** (base[3] + base[4]));
  }
  return base[0] * base[1];
}

export function div(a, b) {
  if (b === 0 || b === '0') {
    return 0;
  }
  const base = calc(a, b);
  return (
    Number(base[0].toString().replace('.', ''))
    / Number(base[1].toString().replace('.', ''))
  ) * (10 ** (base[4] - base[3]));
}

export function add(a, b) {
  const base = calc(a, b);
  if (base[3] === 0 && base[4] === 0) {
    return base[0] + base[1];
  }
  return div(multi(base[0], base[2]) + multi(base[1], base[2]), base[2]);
}

export function sub(a, b) {
  const base = calc(a, b);
  if (base[3] === 0 && base[4] === 0) {
    return base[0] - base[1];
  }
  return div(multi(base[0], base[2]) - multi(base[1], base[2]), base[2]);
}

export function zeroize(num) {
  const reg = /.*\..*/;
  return reg.test(num) ? `${num}` : `${num}.00`;
}
// 获取字节的长度
export function getByteLength(val) {
  const str = String(val);
  let bytesCount = 0;
  for (let i = 0; i < str.length; i += 1) {
    const uniCodeNum = str.charCodeAt(i);
    if (
      (uniCodeNum >= 0x0001 && uniCodeNum <= 0x007e)
      || (uniCodeNum >= 0xff60 && uniCodeNum <= 0xff9f)
    ) {
      bytesCount += 1;
    } else {
      bytesCount += 2;
    }
  }
  return bytesCount;
}
