<template>
  <Badge
    class="sec-badge"
    v-bind="$attrs"
    @click.native="$emit('click', $event)"
  >
    <slot></slot>
  </Badge>
</template>

<script>
import { Badge } from 'element-ui';

export default {
  name: 'ElBadge',
  componentName: 'SecBadge',
  inheritAttrs: false,
  components: {
    Badge,
  },
};
</script>
