import TimePicker from '../DatePicker/src/TimePicker.vue';

TimePicker.install = (Vue) => {
  Vue.component(TimePicker.componentName, TimePicker);
};

export default TimePicker;
