import PageHeader from './src/PageHeader.vue';

PageHeader.install = (Vue) => {
  Vue.component(PageHeader.componentName, PageHeader);
};

export default PageHeader;
