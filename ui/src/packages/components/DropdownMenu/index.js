import DropdownMenu from '../Dropdown/src/DropdownMenu.vue';

DropdownMenu.install = (Vue) => {
  Vue.component(DropdownMenu.componentName, DropdownMenu);
};

export default DropdownMenu;
