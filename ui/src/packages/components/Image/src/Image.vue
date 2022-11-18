<template>
  <SecImage class="sec-image" v-bind="$attrs" v-on="$listeners">
    <template #placeholder><slot name="placeholder"></slot></template>
    <template #error><slot name="error"></slot></template>
  </SecImage>
</template>

<script>
import { Image } from 'element-ui';

export default {
  name: 'ElImage',
  componentName: 'SecImage',
  inheritAttrs: false,
  components: {
    SecImage: Image,
  },
};
</script>
