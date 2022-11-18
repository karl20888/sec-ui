import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import axios from './utils/axios';
import './theme/index.css';
import './assets/iconfont/iconfont.css';
import './assets/iconfont/iconfont';
import './assets/less/index.less';
import './packages/components/index.less';
import './assets/less/doc.less';
import DBSecUI from './packages';

Vue.config.productionTip = false;

Vue.prototype.$axios = axios;

Vue.use(ElementUI, {
  size: 'small',
});
Vue.use(DBSecUI);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
