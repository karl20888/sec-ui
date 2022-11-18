import DropdownItem from '../Dropdown/src/DropdownItem.vue';

DropdownItem.install = (Vue) => {
  Vue.component(DropdownItem.componentName, DropdownItem);
};

export default DropdownItem;
