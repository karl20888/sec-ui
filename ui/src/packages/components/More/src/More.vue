<template>
  <div class="sec-more">
    <div
      class="sec-more-content"
      :class="{ 'sec-more-full': full }"
    ><slot></slot></div>
    <div
      v-if="!disabled"
      class="sec-more-extra"
      @click="onClick"
      @keydown="onClick"
    >
      <slot name="more">
        <sec-icon :name="icon" class="sec-more-icon"></sec-icon>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SecMore',
  componentName: 'SecMore',
  props: {
    icon: {
      type: String,
      default: 'detail',
    },
    full: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onClick(event) {
      this.$emit('more', event);
    },
  },
};
</script>
