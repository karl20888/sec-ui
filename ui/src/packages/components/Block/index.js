import Block from './src/Block.vue';

Block.install = (Vue) => {
  Vue.component(Block.componentName, Block);
};

export default Block;
