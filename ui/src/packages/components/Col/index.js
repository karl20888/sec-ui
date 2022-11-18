import Col from './src/Col.vue';

Col.install = (Vue) => {
  Vue.component(Col.componentName, Col);
};

export default Col;
