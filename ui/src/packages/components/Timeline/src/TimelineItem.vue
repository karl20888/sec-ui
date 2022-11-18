<template>
  <TimelineItem class="sec-timeline-item" v-bind="$attrs">
    <slot></slot>
    <template #dot>
      <slot name="dot"></slot>
    </template>
  </TimelineItem>
</template>

<script>
import { TimelineItem } from 'element-ui';

export default {
  name: 'ElTimelineItem',
  componentName: 'SecTimelineItem',
  inheritAttrs: false,
  components: {
    TimelineItem,
  },
};
</script>
