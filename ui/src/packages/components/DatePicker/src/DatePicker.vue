<template>
  <DatePicker
    ref="datePicker"
    class="sec-date-editor sec-date-picker"
    v-bind="$attrs"
    v-on="$listeners"
  ></DatePicker>
</template>

<script>
import { DatePicker } from 'element-ui';

export default {
  name: 'ElDatePicker',
  componentName: 'SecDatePicker',
  inheritAttrs: false,
  components: {
    DatePicker,
  },
  methods: {
    focus() {
      this.$refs.datePicker.focus();
    },
  },
};
</script>
