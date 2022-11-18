<template>
  <Result class="sec-result" v-bind="$attrs">
    <template #icon><slot name="icon"></slot></template>
    <template #title><slot name="title"></slot></template>
    <template #subTitle><slot name="subTitle"></slot></template>
    <template #extra><slot name="extra"></slot></template>
  </Result>
</template>

<script>
import { Result } from 'element-ui';

export default {
  name: 'ElResult',
  componentName: 'SecResult',
  inheritAttrs: false,
  components: {
    Result,
  },
};
</script>
