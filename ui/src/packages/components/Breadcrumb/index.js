import Breadcrumb from './src/Breadcrumb.vue';

Breadcrumb.install = (Vue) => {
  Vue.component(Breadcrumb.componentName, Breadcrumb);
};

export default Breadcrumb;
