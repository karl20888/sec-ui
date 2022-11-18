import Pager from './src/Pager.vue';

Pager.install = (Vue) => {
  Vue.component(Pager.componentName, Pager);
};

export default Pager;
