<template>
  <Divider class="sec-divider" v-bind="$attrs">
    <slot></slot>
  </Divider>
</template>

<script>
import { Divider } from 'element-ui';

export default {
  name: 'ElDivider',
  componentName: 'SecDivider',
  inheritAttrs: false,
  components: {
    Divider,
  },
};
</script>
