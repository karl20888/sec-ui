<template>
  <SecInput
    ref="input"
    v-model="inputValue"
    v-bind="$attrs"
    v-on="$listeners"
    :type="type"
    :class="[type === 'textarea' ? 'sec-textarea' : 'sec-input']"
    @blur="onBlur"
  >
    <template #prefix><slot name="prefix"></slot></template>
    <template #suffix><slot name="suffix"></slot></template>
    <template #prepend><slot name="prepend"></slot></template>
    <template #append><slot name="append"></slot></template>
  </SecInput>
</template>

<script>
import { trim } from 'lodash';
import { Input } from 'element-ui';

export default {
  name: 'ElInput',
  componentName: 'SecInput',
  inheritAttrs: false,
  components: {
    SecInput: Input,
  },
  props: {
    value: {
      type: [String, Number],
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    trim: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    inputValue: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      },
    },
  },
  methods: {
    focus() {
      this.$refs.input.focus();
    },
    blur() {
      this.$refs.input.blur();
    },
    select() {
      this.$refs.input.select();
    },
    onBlur() {
      if (this.trim) {
        this.inputValue = trim(this.inputValue);
      }
    },
  },
};
</script>
