<template>
  <BreadcrumbItem class="sec-breadcrumb-item" v-bind="$attrs">
    <slot></slot>
  </BreadcrumbItem>
</template>

<script>
import { BreadcrumbItem } from 'element-ui';

export default {
  name: 'ElBreadcrumbItem',
  componentName: 'SecBreadcrumbItem',
  inheritAttrs: false,
  components: {
    BreadcrumbItem,
  },
};
</script>
