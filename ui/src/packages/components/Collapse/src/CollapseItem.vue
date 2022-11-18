<template>
  <CollapseItem class="sec-collapse-item" v-bind="$attrs">
    <slot></slot>
    <template #title>
      <slot name="title"></slot>
    </template>
  </CollapseItem>
</template>

<script>
import { CollapseItem } from 'element-ui';

export default {
  name: 'ElCollapseItem',
  componentName: 'SecCollapseItem',
  inheritAttrs: false,
  components: {
    CollapseItem,
  },
};
</script>
