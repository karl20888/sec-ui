<template>
  <Autocomplete
    ref="autocomplete"
    class="sec-autocomplete"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template #default="{ item }">
      <slot :item="item"></slot>
    </template>
    <template #prefix><slot name="prefix"></slot></template>
    <template #suffix><slot name="suffix"></slot></template>
    <template #prepend><slot name="prepend"></slot></template>
    <template #append><slot name="append"></slot></template>
  </Autocomplete>
</template>

<script>
import { Autocomplete } from 'element-ui';

export default {
  name: 'ElAutocomplete',
  componentName: 'SecAutocomplete',
  inheritAttrs: false,
  components: {
    Autocomplete,
  },
  methods: {
    focus() {
      this.$refs.autocomplete.focus();
    },
  },
};
</script>
