/* eslint-disable no-param-reassign */
import { each } from 'lodash';
import {
  Loading,
  Message,
  MessageBox,
  Notification,
  InfiniteScroll,
} from 'element-ui';
import components from './components';
import { dateFormat, timeFormat } from './utils/dateFormat';

const install = (Vue) => {
  each(components, (component) => {
    Vue.component(component.componentName || component.name, component);
  });
  Vue.use(Loading.directive);
  Vue.use(InfiniteScroll);
  Vue.prototype.$ELEMENT = {
    size: 'small',
    zIndex: 2000,
  };
  Vue.prototype.$loading = Loading.service;
  Vue.prototype.$message = Message;
  Vue.prototype.$msgbox = MessageBox;
  Vue.prototype.$alert = MessageBox.alert;
  Vue.prototype.$confirm = MessageBox.confirm;
  Vue.prototype.$prompt = MessageBox.prompt;
  Vue.prototype.$notify = Notification;
  Vue.filter('dateFormat', (value, format) => {
    if (value) {
      return dateFormat(value, format);
    }
    return '';
  });
  Vue.filter('timeFormat', (value, format) => {
    if (value) {
      return timeFormat(value, format);
    }
    return '';
  });
};

export default {
  install,
  Loading,
  Message,
  MessageBox,
  Notification,
  InfiniteScroll,
  dateFormat,
  timeFormat,
};
