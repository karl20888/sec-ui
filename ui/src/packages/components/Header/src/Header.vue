<template>
  <Header class="sec-header" v-bind="$attrs">
    <slot></slot>
  </Header>
</template>

<script>
import { Header } from 'element-ui';

export default {
  name: 'ElHeader',
  componentName: 'SecHeader',
  inheritAttrs: false,
  components: {
    Header,
  },
};
</script>
