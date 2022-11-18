import Badge from './src/Badge.vue';

Badge.install = (Vue) => {
  Vue.component(Badge.componentName, Badge);
};

export default Badge;
