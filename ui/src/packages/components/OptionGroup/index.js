import OptionGroup from '../Select/src/OptionGroup.vue';

OptionGroup.install = (Vue) => {
  Vue.component(OptionGroup.componentName, OptionGroup);
};

export default OptionGroup;
