<template>
  <RadioButton class="sec-radio-button" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </RadioButton>
</template>

<script>
import { RadioButton } from 'element-ui';

export default {
  name: 'ElRadioButton',
  componentName: 'SecRadioButton',
  inheritAttrs: false,
  components: {
    RadioButton,
  },
};
</script>
