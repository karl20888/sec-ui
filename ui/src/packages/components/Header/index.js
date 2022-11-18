import Header from './src/Header.vue';

Header.install = (Vue) => {
  Vue.component(Header.componentName, Header);
};

export default Header;
