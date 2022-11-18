import Dialog from './src/Dialog.vue';

Dialog.install = (Vue) => {
  Vue.component(Dialog.componentName, Dialog);
};

export default Dialog;
