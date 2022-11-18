import Cascader from './src/Cascader.vue';

Cascader.install = (Vue) => {
  Vue.component(Cascader.componentName, Cascader);
};

export default Cascader;
