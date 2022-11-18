import Autocomplete from './src/Autocomplete.vue';

Autocomplete.install = (Vue) => {
  Vue.component(Autocomplete.componentName, Autocomplete);
};

export default Autocomplete;
