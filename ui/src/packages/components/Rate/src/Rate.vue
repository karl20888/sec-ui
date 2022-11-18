<template>
  <Rate class="sec-rate" v-bind="$attrs" v-on="$listeners"></Rate>
</template>

<script>
import { Rate } from 'element-ui';

export default {
  name: 'ElRate',
  componentName: 'SecRate',
  inheritAttrs: false,
  components: {
    Rate,
  },
};
</script>
