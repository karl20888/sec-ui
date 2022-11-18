import Form from './src/Form.vue';

Form.install = (Vue) => {
  Vue.component(Form.componentName, Form);
};

export default Form;
