<template>
  <Skeleton class="sec-skeleton" v-bind="$attrs">
    <slot></slot>
    <template #template><slot name="template"></slot></template>
  </Skeleton>
</template>

<script>
import { Skeleton } from 'element-ui';

export default {
  name: 'ElSkeleton',
  componentName: 'SecSkeleton',
  inheritAttrs: false,
  components: {
    Skeleton,
  },
};
</script>
