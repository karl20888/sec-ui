<template>
  <SecSelect
    ref="select"
    class="sec-select"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot></slot>
    <template #prefix><slot name="prefix"></slot></template>
    <template #empty><slot name="empty"></slot></template>
  </SecSelect>
</template>

<script>
import { Select } from 'element-ui';

export default {
  name: 'ElSelect',
  componentName: 'SecSelect',
  inheritAttrs: false,
  components: {
    SecSelect: Select,
  },
  methods: {
    focus() {
      this.$refs.select.focus();
    },
    blur() {
      this.$refs.select.blur();
    },
  },
};
</script>
