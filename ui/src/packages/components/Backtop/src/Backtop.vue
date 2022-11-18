<template>
  <Backtop class="sec-backtop" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </Backtop>
</template>

<script>
import { Backtop } from 'element-ui';

export default {
  name: 'ElBacktop',
  componentName: 'SecBacktop',
  inheritAttrs: false,
  components: {
    Backtop,
  },
};
</script>
