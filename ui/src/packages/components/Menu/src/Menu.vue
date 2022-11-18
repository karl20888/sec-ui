<template>
  <Menu
    ref="menu"
    class="sec-menu"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot></slot>
  </Menu>
</template>

<script>
import { Menu } from 'element-ui';

export default {
  name: 'ElMenu',
  componentName: 'SecMenu',
  inheritAttrs: false,
  components: {
    Menu,
  },
  methods: {
    open(index) {
      this.$refs.menu.open(index);
    },
    close(index) {
      this.$refs.menu.close(index);
    },
  },
};
</script>
