import Vue from 'vue';
import SecUI from 'element-sec-ui';
import MarkdownItVue from 'markdown-it-vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import 'element-sec-ui/dist/sec-ui.css';
import 'highlight.js/styles/default.css';
import './assets/less/doc.less';

const markdownItVueInstall = (vue) => {
  vue.component(MarkdownItVue.name, MarkdownItVue);
};

Vue.config.productionTip = false;

Vue.use(SecUI);
Vue.use(markdownItVueInstall);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
