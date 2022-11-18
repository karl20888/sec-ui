import Drawer from './src/Drawer.vue';

Drawer.install = (Vue) => {
  Vue.component(Drawer.componentName, Drawer);
};

export default Drawer;
