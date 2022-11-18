import MenuItem from '../Menu/src/MenuItem.vue';

MenuItem.install = (Vue) => {
  Vue.component(MenuItem.componentName, MenuItem);
};

export default MenuItem;
