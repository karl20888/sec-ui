<template>
  <Checkbox class="sec-checkbox" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </Checkbox>
</template>

<script>
import { Checkbox } from 'element-ui';

export default {
  name: 'ElCheckbox',
  componentName: 'SecCheckbox',
  inheritAttrs: false,
  components: {
    Checkbox,
  },
};
</script>
