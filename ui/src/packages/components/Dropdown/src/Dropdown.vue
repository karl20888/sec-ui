<template>
  <Dropdown class="sec-dropdown" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
    <template #dropdown><slot name="dropdown"></slot></template>
  </Dropdown>
</template>

<script>
import { Dropdown } from 'element-ui';

export default {
  name: 'ElDropdown',
  componentName: 'SecDropdown',
  inheritAttrs: false,
  components: {
    Dropdown,
  },
};
</script>
