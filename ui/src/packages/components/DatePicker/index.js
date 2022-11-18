import DatePicker from './src/DatePicker.vue';

DatePicker.install = (Vue) => {
  Vue.component(DatePicker.componentName, DatePicker);
};

export default DatePicker;
