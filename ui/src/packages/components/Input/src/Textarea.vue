<template>
  <sec-input
    ref="textarea"
    type="textarea"
    class="sec-textarea"
    v-bind="$attrs"
    v-on="$listeners"
    :show-word-limit="showWordLimit"
  ></sec-input>
</template>

<script>
export default {
  name: 'SecTextarea',
  componentName: 'SecTextarea',
  inheritAttrs: false,
  props: {
    showWordLimit: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    focus() {
      this.$refs.textarea.focus();
    },
    blur() {
      this.$refs.textarea.blur();
    },
    select() {
      this.$refs.textarea.select();
    },
  },
};
</script>
