<template>
  <Tag
    class="sec-tag"
    :class="{ 'sec-tag-state': state }"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot></slot>
  </Tag>
</template>

<script>
import { Tag } from 'element-ui';

export default {
  name: 'ElTag',
  componentName: 'SecTag',
  inheritAttrs: false,
  components: {
    Tag,
  },
  props: {
    state: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
