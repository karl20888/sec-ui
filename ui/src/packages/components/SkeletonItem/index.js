import SkeletonItem from '../Skeleton/src/SkeletonItem.vue';

SkeletonItem.install = (Vue) => {
  Vue.component(SkeletonItem.componentName, SkeletonItem);
};

export default SkeletonItem;
