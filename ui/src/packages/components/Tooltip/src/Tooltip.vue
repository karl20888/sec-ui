<template>
  <Tooltip class="sec-tooltip" v-bind="$attrs" :effect="effect">
    <slot></slot>
    <template #content><slot name="content"></slot></template>
  </Tooltip>
</template>

<script>
import { Tooltip } from 'element-ui';

export default {
  name: 'ElTooltip',
  componentName: 'SecTooltip',
  inheritAttrs: false,
  components: {
    Tooltip,
  },
  props: {
    effect: {
      type: String,
      default: 'light',
    },
  },
};
</script>
