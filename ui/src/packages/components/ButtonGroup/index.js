import ButtonGroup from '../Button/src/ButtonGroup.vue';

ButtonGroup.install = (Vue) => {
  Vue.component(ButtonGroup.componentName, ButtonGroup);
};

export default ButtonGroup;
