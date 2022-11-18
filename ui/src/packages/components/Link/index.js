import Link from './src/Link.vue';

Link.install = (Vue) => {
  Vue.component(Link.componentName, Link);
};

export default Link;
