<template>
  <Upload
    ref="upload"
    class="sec-upload"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot></slot>
    <template #trigger><slot name="trigger"></slot></template>
    <template #tip><slot name="tip"></slot></template>
    <template #file="{ file }">
      <slot name="file" :file="file"></slot>
    </template>
  </Upload>
</template>

<script>
import { Upload } from 'element-ui';

export default {
  name: 'ElUpload',
  componentName: 'SecUpload',
  inheritAttrs: false,
  components: {
    Upload,
  },
  methods: {
    clearFiles() {
      this.$refs.upload.clearFiles();
    },
    abort(file) {
      this.$refs.upload.abort(file);
    },
    submit() {
      this.$refs.upload.submit();
    },
  },
};
</script>
