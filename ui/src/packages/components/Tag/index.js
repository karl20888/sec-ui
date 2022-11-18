import Tag from './src/Tag.vue';

Tag.install = (Vue) => {
  Vue.component(Tag.componentName, Tag);
};

export default Tag;
