<template>
  <TimePicker
    ref="timePicker"
    class="sec-date-editor sec-time-picker"
    v-bind="$attrs"
    v-on="$listeners"
  ></TimePicker>
</template>

<script>
import { TimePicker } from 'element-ui';

export default {
  name: 'ElTimePicker',
  componentName: 'SecTimePicker',
  inheritAttrs: false,
  components: {
    TimePicker,
  },
  methods: {
    focus() {
      this.$refs.timePicker.focus();
    },
  },
};
</script>
