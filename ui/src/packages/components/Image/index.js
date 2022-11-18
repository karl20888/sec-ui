import Image from './src/Image.vue';

Image.install = (Vue) => {
  Vue.component(Image.componentName, Image);
};

export default Image;
