<template>
  <OptionGroup
    class="sec-select-group__wrap"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot></slot>
  </OptionGroup>
</template>

<script>
import { OptionGroup } from 'element-ui';

export default {
  name: 'ElOptionGroup',
  componentName: 'SecOptionGroup',
  inheritAttrs: false,
  components: {
    OptionGroup,
  },
};
</script>
