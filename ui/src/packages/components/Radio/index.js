import Radio from './src/Radio.vue';

Radio.install = (Vue) => {
  Vue.component(Radio.componentName, Radio);
};

export default Radio;
