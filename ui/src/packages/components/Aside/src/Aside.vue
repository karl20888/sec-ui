<template>
  <Aside class="sec-aside" v-bind="$attrs">
    <slot></slot>
  </Aside>
</template>

<script>
import { Aside } from 'element-ui';

export default {
  name: 'ElAside',
  componentName: 'SecAside',
  inheritAttrs: false,
  components: {
    Aside,
  },
};
</script>
