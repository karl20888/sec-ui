<template>
  <SkeletonItem class="sec-skeleton-item" v-bind="$attrs"></SkeletonItem>
</template>

<script>
import { SkeletonItem } from 'element-ui';

export default {
  name: 'ElSkeletonItem',
  componentName: 'SecSkeletonItem',
  inheritAttrs: false,
  components: {
    SkeletonItem,
  },
};
</script>
