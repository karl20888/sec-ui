<template>
  <ColorPicker
    class="sec-color-picker"
    v-bind="$attrs"
    v-on="$listeners"
  ></ColorPicker>
</template>

<script>
import { ColorPicker } from 'element-ui';

export default {
  name: 'ElColorPicker',
  componentName: 'SecColorPicker',
  inheritAttrs: false,
  components: {
    ColorPicker,
  },
};
</script>
