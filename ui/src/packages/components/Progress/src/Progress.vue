<template>
  <Progress class="sec-progress" v-bind="$attrs"></Progress>
</template>

<script>
import { Progress } from 'element-ui';

export default {
  name: 'ElProgress',
  componentName: 'SecProgress',
  inheritAttrs: false,
  components: {
    Progress,
  },
};
</script>
