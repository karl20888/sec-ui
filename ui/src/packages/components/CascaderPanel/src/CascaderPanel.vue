<template>
  <CascaderPanel
    ref="cascaderPanel"
    class="sec-cascader-panel"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template #default="{ node, data }">
      <slot :node="node" :data="data"></slot>
    </template>
  </CascaderPanel>
</template>

<script>
import { CascaderPanel } from 'element-ui';

export default {
  name: 'ElCascaderPanel',
  componentName: 'SecCascaderPanel',
  inheritAttrs: false,
  components: {
    CascaderPanel,
  },
  methods: {
    getCheckedNodes(leafOnly = false) {
      this.$refs.cascaderPanel.getCheckedNodes(leafOnly);
    },
    clearCheckedNodes() {
      this.$refs.cascaderPanel.clearCheckedNodes();
    },
  },
};
</script>
