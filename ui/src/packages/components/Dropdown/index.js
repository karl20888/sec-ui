import Dropdown from './src/Dropdown.vue';

Dropdown.install = (Vue) => {
  Vue.component(Dropdown.componentName, Dropdown);
};

export default Dropdown;
