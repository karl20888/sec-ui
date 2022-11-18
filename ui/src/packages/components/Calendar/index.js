import Calendar from './src/Calendar.vue';

Calendar.install = (Vue) => {
  Vue.component(Calendar.componentName, Calendar);
};

export default Calendar;
