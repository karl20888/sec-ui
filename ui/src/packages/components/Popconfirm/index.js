import Popconfirm from './src/Popconfirm.vue';

Popconfirm.install = (Vue) => {
  Vue.component(Popconfirm.componentName, Popconfirm);
};

export default Popconfirm;
