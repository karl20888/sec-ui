<template>
  <Cascader
    ref="cascader"
    class="sec-cascader"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template #default="{ node, data }">
      <slot :node="node" :data="data"></slot>
    </template>
    <template #empty><slot name="empty"></slot></template>
  </Cascader>
</template>

<script>
import { Cascader } from 'element-ui';

export default {
  name: 'ElCascader',
  componentName: 'SecCascader',
  inheritAttrs: false,
  components: {
    Cascader,
  },
  methods: {
    getCheckedNodes(leafOnly = false) {
      this.$refs.cascader.getCheckedNodes(leafOnly);
    },
  },
};
</script>
