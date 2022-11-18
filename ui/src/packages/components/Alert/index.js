import Alert from './src/Alert.vue';

Alert.install = (Vue) => {
  Vue.component(Alert.componentName, Alert);
};

export default Alert;
