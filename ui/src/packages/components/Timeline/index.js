import Timeline from './src/Timeline.vue';

Timeline.install = (Vue) => {
  Vue.component(Timeline.componentName, Timeline);
};

export default Timeline;
