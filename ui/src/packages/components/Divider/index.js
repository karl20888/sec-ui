import Divider from './src/Divider.vue';

Divider.install = (Vue) => {
  Vue.component(Divider.componentName, Divider);
};

export default Divider;
