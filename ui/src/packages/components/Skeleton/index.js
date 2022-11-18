import Skeleton from './src/Skeleton.vue';

Skeleton.install = (Vue) => {
  Vue.component(Skeleton.componentName, Skeleton);
};

export default Skeleton;
