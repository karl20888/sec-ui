import Progress from './src/Progress.vue';

Progress.install = (Vue) => {
  Vue.component(Progress.componentName, Progress);
};

export default Progress;
