import Button from './src/Button.vue';

Button.install = (Vue) => {
  Vue.component(Button.componentName, Button);
};

export default Button;
