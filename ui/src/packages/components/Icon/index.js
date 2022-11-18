import Icon from './src/Icon.vue';

Icon.install = (Vue) => {
  Vue.component(Icon.componentName, Icon);
};

export default Icon;
