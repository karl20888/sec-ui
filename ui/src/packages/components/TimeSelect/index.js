import TimeSelect from '../DatePicker/src/TimeSelect.vue';

TimeSelect.install = (Vue) => {
  Vue.component(TimeSelect.componentName, TimeSelect);
};

export default TimeSelect;
