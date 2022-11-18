<template>
  <Dialog
    class="sec-dialog"
    v-bind="$attrs"
    v-on="$listeners"
    :visible.sync="isVisible"
    :append-to-body="appendToBody"
    @open="onOpen"
    @close="onClose"
  >
    <slot></slot>
    <template #title><slot name="title"></slot></template>
    <template #footer><slot name="footer"></slot></template>
  </Dialog>
</template>

<script>
import { Dialog } from 'element-ui';

export default {
  name: 'ElDialog',
  componentName: 'SecDialog',
  inheritAttrs: false,
  components: {
    Dialog,
  },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    appendToBody: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    open() {
      this.isVisible = true;
    },
    close() {
      this.isVisible = false;
    },
    onOpen() {
      this.$emit('update:visible', true);
    },
    onClose() {
      this.$emit('update:visible', false);
    },
  },
  watch: {
    visible: {
      immediate: true,
      handler(val) {
        this.isVisible = val;
      },
    },
  },
};
</script>
