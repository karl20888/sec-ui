<template>
  <Button class="sec-btn" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </Button>
</template>

<script>
import { Button } from 'element-ui';

export default {
  name: 'ElButton',
  componentName: 'SecBtn',
  inheritAttrs: false,
  components: {
    Button,
  },
};
</script>
