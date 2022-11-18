<template>
  <Main class="sec-main" v-bind="$attrs">
    <slot></slot>
  </Main>
</template>

<script>
import { Main } from 'element-ui';

export default {
  name: 'ElMain',
  componentName: 'SecMain',
  inheritAttrs: false,
  components: {
    Main,
  },
};
</script>
