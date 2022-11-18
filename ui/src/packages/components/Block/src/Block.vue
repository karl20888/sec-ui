<template>
  <div class="sec-block" :class="{ 'sec-block-full': full }">
    <div
      v-if="title || $slots.title || $slots.extra"
      class="sec-block-header"
      :class="{ 'sec-block-header-card': header === 'card' }"
    >
      <slot name="title">
        <strong class="sec-block-title">{{ title }}</strong>
      </slot>
      <div class="sec-block-extra">
        <slot name="extra"></slot>
      </div>
    </div>
    <div
      class="sec-block-content"
      :style="{
        padding: contentPadding,
      }"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SecBlock',
  componentName: 'SecBlock',
  props: {
    title: {
      type: String,
      default: '',
    },
    full: {
      type: Boolean,
      default: false,
    },
    header: {
      type: String,
      default: '',
    },
    contentPadding: {
      type: String,
      default: null,
    },
  },
};
</script>
