<template>
  <Breadcrumb class="sec-breadcrumb" v-bind="$attrs">
    <slot></slot>
  </Breadcrumb>
</template>

<script>
import { Breadcrumb } from 'element-ui';

export default {
  name: 'ElBreadcrumb',
  componentName: 'SecBreadcrumb',
  inheritAttrs: false,
  components: {
    Breadcrumb,
  },
};
</script>
