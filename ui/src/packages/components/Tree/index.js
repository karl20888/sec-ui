import Tree from './src/Tree.vue';

Tree.install = (Vue) => {
  Vue.component(Tree.componentName, Tree);
};

export default Tree;
