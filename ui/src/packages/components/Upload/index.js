import Upload from './src/Upload.vue';

Upload.install = (Vue) => {
  Vue.component(Upload.componentName, Upload);
};

export default Upload;
