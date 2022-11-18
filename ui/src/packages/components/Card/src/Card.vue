<template>
  <Card class="sec-card" v-bind="$attrs">
    <slot></slot>
    <template #header
      v-if="header || title || $scopedSlots.header || $scopedSlots.title || $scopedSlots.extra"
    >
      <slot name="header">
        <div class="sec-card-header">
          <div class="sec-card-title">
            <slot name="title">{{ title || header }}</slot>
          </div>
          <div v-if="$scopedSlots.extra" class="sec-card-extra">
            <slot name="extra"></slot>
          </div>
        </div>
      </slot>
    </template>
  </Card>
</template>

<script>
import { Card } from 'element-ui';

export default {
  name: 'ElCard',
  componentName: 'SecCard',
  inheritAttrs: false,
  components: {
    Card,
  },
  props: {
    header: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
  },
};
</script>
