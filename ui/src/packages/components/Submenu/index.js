import Submenu from '../Menu/src/Submenu.vue';

Submenu.install = (Vue) => {
  Vue.component(Submenu.componentName, Submenu);
};

export default Submenu;
