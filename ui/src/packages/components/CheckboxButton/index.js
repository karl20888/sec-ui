import CheckboxButton from '../Checkbox/src/CheckboxButton.vue';

CheckboxButton.install = (Vue) => {
  Vue.component(CheckboxButton.componentName, CheckboxButton);
};

export default CheckboxButton;
