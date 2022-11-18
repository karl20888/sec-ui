<template>
  <MenuItemGroup class="sec-menu-item-group" v-bind="$attrs">
    <slot></slot>
    <template #title><slot name="title"></slot></template>
  </MenuItemGroup>
</template>

<script>
import { MenuItemGroup } from 'element-ui';

export default {
  name: 'ElMenuItemGroup',
  componentName: 'SecMenuItemGroup',
  inheritAttrs: false,
  components: {
    MenuItemGroup,
  },
};
</script>
