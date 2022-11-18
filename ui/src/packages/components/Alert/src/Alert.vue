<template>
  <Alert class="sec-alert" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
    <template #title><slot name="title"></slot></template>
  </Alert>
</template>

<script>
import { Alert } from 'element-ui';

export default {
  name: 'ElAlert',
  componentName: 'SecAlert',
  inheritAttrs: false,
  components: {
    Alert,
  },
};
</script>
