import Container from './src/Container.vue';

Container.install = (Vue) => {
  Vue.component(Container.componentName, Container);
};

export default Container;
