<template>
  <Popover ref="popover" class="sec-popover" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
    <template #reference><slot name="reference"></slot></template>
  </Popover>
</template>

<script>
import { Popover } from 'element-ui';

export default {
  name: 'ElPopover',
  componentName: 'SecPopover',
  inheritAttrs: false,
  components: {
    Popover,
  },
};
</script>
