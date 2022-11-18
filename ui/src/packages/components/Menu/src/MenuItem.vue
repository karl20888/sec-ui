<template>
  <MenuItem class="sec-menu-item" v-bind="$attrs">
    <slot></slot>
    <template #title><slot name="title"></slot></template>
  </MenuItem>
</template>

<script>
import { MenuItem } from 'element-ui';

export default {
  name: 'ElMenuItem',
  componentName: 'SecMenuItem',
  inheritAttrs: false,
  components: {
    MenuItem,
  },
};
</script>
