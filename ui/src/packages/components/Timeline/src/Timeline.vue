<template>
  <Timeline class="sec-timeline" v-bind="$attrs">
    <slot></slot>
  </Timeline>
</template>

<script>
import { Timeline } from 'element-ui';

export default {
  name: 'ElTimeline',
  componentName: 'SecTimeline',
  inheritAttrs: false,
  components: {
    Timeline,
  },
};
</script>
