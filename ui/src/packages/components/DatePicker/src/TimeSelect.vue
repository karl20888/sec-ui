<template>
  <TimeSelect
    ref="timeSelect"
    class="sec-date-editor sec-time-select"
    v-bind="$attrs"
    v-on="$listeners"
  ></TimeSelect>
</template>

<script>
import { TimeSelect } from 'element-ui';

export default {
  name: 'ElTimeSelect',
  componentName: 'SecTimeSelect',
  inheritAttrs: false,
  components: {
    TimeSelect,
  },
  methods: {
    focus() {
      this.$refs.timeSelect.focus();
    },
  },
};
</script>
