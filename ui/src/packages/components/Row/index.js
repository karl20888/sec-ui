import Row from './src/Row.vue';

Row.install = (Vue) => {
  Vue.component(Row.componentName, Row);
};

export default Row;
