import Tooltip from './src/Tooltip.vue';

Tooltip.install = (Vue) => {
  Vue.component(Tooltip.componentName, Tooltip);
};

export default Tooltip;
