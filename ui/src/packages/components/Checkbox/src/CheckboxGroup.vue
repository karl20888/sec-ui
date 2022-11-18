<template>
  <CheckboxGroup class="sec-checkbox-group" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </CheckboxGroup>
</template>

<script>
import { CheckboxGroup } from 'element-ui';

export default {
  name: 'ElCheckboxGroup',
  componentName: 'SecCheckboxGroup',
  inheritAttrs: false,
  components: {
    CheckboxGroup,
  },
};
</script>
