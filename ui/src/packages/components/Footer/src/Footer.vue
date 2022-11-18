<template>
  <Footer class="sec-footer" v-bind="$attrs">
    <slot></slot>
  </Footer>
</template>

<script>
import { Footer } from 'element-ui';

export default {
  name: 'ElFooter',
  componentName: 'SecFooter',
  inheritAttrs: false,
  components: {
    Footer,
  },
};
</script>
