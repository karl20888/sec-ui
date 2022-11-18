import BreadcrumbItem from '../Breadcrumb/src/BreadcrumbItem.vue';

BreadcrumbItem.install = (Vue) => {
  Vue.component(BreadcrumbItem.componentName, BreadcrumbItem);
};

export default BreadcrumbItem;
