import MenuItemGroup from '../Menu/src/MenuItemGroup.vue';

MenuItemGroup.install = (Vue) => {
  Vue.component(MenuItemGroup.componentName, MenuItemGroup);
};

export default MenuItemGroup;
