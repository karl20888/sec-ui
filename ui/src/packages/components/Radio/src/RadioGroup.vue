<template>
  <RadioGroup class="sec-radio-group" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </RadioGroup>
</template>

<script>
import { RadioGroup } from 'element-ui';

export default {
  name: 'ElRadioGroup',
  componentName: 'SecRadioGroup',
  inheritAttrs: false,
  components: {
    RadioGroup,
  },
};
</script>
