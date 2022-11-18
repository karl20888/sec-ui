<template>
  <Popconfirm class="sec-popconfirm" v-bind="$attrs" v-on="$listeners">
    <template #reference>
      <slot name="reference"></slot>
    </template>
  </Popconfirm>
</template>

<script>
import { Popconfirm } from 'element-ui';

export default {
  name: 'ElPopconfirm',
  componentName: 'SecPopconfirm',
  inheritAttrs: false,
  components: {
    Popconfirm,
  },
};
</script>
