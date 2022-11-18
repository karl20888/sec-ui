import Aside from './src/Aside.vue';

Aside.install = (Vue) => {
  Vue.component(Aside.componentName, Aside);
};

export default Aside;
