<template>
  <Transfer
    ref="transfer"
    class="sec-transfer"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template v-if="$scopedSlots.default" #default="{ option }">
      <slot :option="option"></slot>
    </template>
    <template #left-footer><slot name="left-footer"></slot></template>
    <template #right-footer><slot name="right-footer"></slot></template>
  </Transfer>
</template>

<script>
import { Transfer } from 'element-ui';

export default {
  name: 'ElTransfer',
  componentName: 'SecTransfer',
  inheritAttrs: false,
  components: {
    Transfer,
  },
  methods: {
    clearQuery(which) {
      this.$refs.transfer.clearQuery(which);
    },
  },
};
</script>
