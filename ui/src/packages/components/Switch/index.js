import Switch from './src/Switch.vue';

Switch.install = (Vue) => {
  Vue.component(Switch.componentName, Switch);
};

export default Switch;
