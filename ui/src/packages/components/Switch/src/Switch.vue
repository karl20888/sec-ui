<template>
  <sec-switch
    ref="switch"
    class="sec-switch"
    v-bind="$attrs"
    v-on="$listeners"
  ></sec-switch>
</template>

<script>
import { Switch } from 'element-ui';

export default {
  name: 'ElSwitch',
  componentName: 'SecSwitch',
  inheritAttrs: false,
  components: {
    SecSwitch: Switch,
  },
  methods: {
    focus() {
      this.$refs.switch.focus();
    },
  },
};
</script>
