<template>
  <DropdownItem class="sec-dropdown-item" v-bind="$attrs">
    <slot></slot>
  </DropdownItem>
</template>

<script>
import { DropdownItem } from 'element-ui';

export default {
  name: 'ElDropdownItem',
  componentName: 'SecDropdownItem',
  inheritAttrs: false,
  components: {
    DropdownItem,
  },
};
</script>
