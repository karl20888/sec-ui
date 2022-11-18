<template>
  <DropdownMenu class="sec-dropdown-menu" v-bind="$attrs">
    <slot></slot>
  </DropdownMenu>
</template>

<script>
import { DropdownMenu } from 'element-ui';

export default {
  name: 'ElDropdownMenu',
  componentName: 'SecDropdownMenu',
  inheritAttrs: false,
  components: {
    DropdownMenu,
  },
};
</script>
