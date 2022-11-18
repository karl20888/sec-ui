<template>
  <CheckboxButton class="sec-checkbox-button" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </CheckboxButton>
</template>

<script>
import { CheckboxButton } from 'element-ui';

export default {
  name: 'ElCheckboxButton',
  componentName: 'SecCheckboxButton',
  inheritAttrs: false,
  components: {
    CheckboxButton,
  },
};
</script>
