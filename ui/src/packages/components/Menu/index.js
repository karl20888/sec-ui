import Menu from './src/Menu.vue';

Menu.install = (Vue) => {
  Vue.component(Menu.componentName, Menu);
};

export default Menu;
