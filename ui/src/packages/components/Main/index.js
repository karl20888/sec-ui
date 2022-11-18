import Main from './src/Main.vue';

Main.install = (Vue) => {
  Vue.component(Main.componentName, Main);
};

export default Main;
