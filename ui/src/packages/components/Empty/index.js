import Empty from './src/Empty.vue';

Empty.install = (Vue) => {
  Vue.component(Empty.componentName, Empty);
};

export default Empty;
