<template>
  <InputNumber
    ref="inputNumber"
    class="sec-input-number"
    v-bind="$attrs"
    v-on="$listeners"
  ></InputNumber>
</template>

<script>
import { InputNumber } from 'element-ui';

export default {
  name: 'ElInputNumber',
  componentName: 'SecInputNumber',
  inheritAttrs: false,
  components: {
    InputNumber,
  },
  methods: {
    focus() {
      this.$refs.inputNumber.focus();
    },
    select() {
      this.$refs.inputNumber.select();
    },
  },
};
</script>
