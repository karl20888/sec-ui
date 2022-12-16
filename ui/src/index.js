import './theme/index.css';
import './assets/iconfont/iconfont.css';
import './assets/iconfont/iconfont';
import './assets/less/index.less';
import './packages/components/index.less';
import packages from './packages';
import * as math from './packages/utils/math';
import * as tools from './packages/utils/tools';
import secResizer from './packages/utils/resizer';

const {
  install,
  Loading: SecLoading,
  Message: SecMessage,
  MessageBox: SecMessageBox,
  Notification: SecNotification,
  InfiniteScroll: SecInfiniteScroll,
  dateFormat: secDateFormat,
  timeFormat: secTimeFormat,
} = packages;

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

const version = '0.7.8';

export const Loading = SecLoading;
export const Message = SecMessage;
export const MessageBox = SecMessageBox;
export const Notification = SecNotification;
export const InfiniteScroll = SecInfiniteScroll;
export const dateFormat = secDateFormat;
export const timeFormat = secTimeFormat;
export const Math = math;
export const {
  round,
  ceil,
  floor,
  multi,
  div,
  add,
  sub,
  zeroize,
  getByteLength,
} = math;
export const Tools = tools;
export const {
  html2Text,
  isIP,
  isIPv4,
  isIPv6,
} = tools;

export const resizer = secResizer;

export default {
  version,
  install,
};
