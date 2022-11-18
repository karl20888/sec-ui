import TimelineItem from '../Timeline/src/TimelineItem.vue';

TimelineItem.install = (Vue) => {
  Vue.component(TimelineItem.componentName, TimelineItem);
};

export default TimelineItem;
