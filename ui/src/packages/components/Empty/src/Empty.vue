<template>
  <Empty class="sec-empty" v-bind="$attrs">
    <slot></slot>
    <template #image><slot name="image"></slot></template>
    <template #description><slot name="description"></slot></template>
  </Empty>
</template>

<script>
import { Empty } from 'element-ui';

export default {
  name: 'ElEmpty',
  componentName: 'SecEmpty',
  inheritAttrs: false,
  components: {
    Empty,
  },
};
</script>
