<template>
  <Link
    class="sec-link"
    v-bind="$attrs"
    v-on="$listeners"
    :underline="underline"
  >
    <slot></slot>
  </Link>
</template>

<script>
import { Link } from 'element-ui';

export default {
  name: 'ElLink',
  componentName: 'SecLink',
  inheritAttrs: false,
  components: {
    Link,
  },
  props: {
    underline: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
