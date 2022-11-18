import Layout from './src/Layout.vue';

Layout.install = (Vue) => {
  Vue.component(Layout.componentName, Layout);
};

export default Layout;
