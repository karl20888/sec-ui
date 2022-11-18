<template>
  <Radio class="sec-radio" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </Radio>
</template>

<script>
import { Radio } from 'element-ui';

export default {
  name: 'ElRadio',
  componentName: 'SecRadio',
  inheritAttrs: false,
  components: {
    Radio,
  },
};
</script>
