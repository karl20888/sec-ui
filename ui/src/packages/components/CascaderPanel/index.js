import CascaderPanel from './src/CascaderPanel.vue';

CascaderPanel.install = (Vue) => {
  Vue.component(CascaderPanel.componentName, CascaderPanel);
};

export default CascaderPanel;
