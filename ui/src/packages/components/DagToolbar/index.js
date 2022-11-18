import DagToolbar from './src/DagToolbar.vue';

DagToolbar.install = (Vue) => {
  Vue.component(DagToolbar.componentName, DagToolbar);
};

export default DagToolbar;
