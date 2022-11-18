import ColorPicker from './src/ColorPicker.vue';

ColorPicker.install = (Vue) => {
  Vue.component(ColorPicker.componentName, ColorPicker);
};

export default ColorPicker;
