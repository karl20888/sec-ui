import RadioGroup from '../Radio/src/RadioGroup.vue';

RadioGroup.install = (Vue) => {
  Vue.component(RadioGroup.componentName, RadioGroup);
};

export default RadioGroup;
