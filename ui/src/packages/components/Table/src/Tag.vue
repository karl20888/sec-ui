<template>
  <span
    class="sec-table-filter-tag"
    :class="{ 'is-active': active }"
  >
    <slot></slot>
    <i
      class="el-icon-circle-close cur-p"
      @mouseenter="active = true"
      @focus="active = true"
      @mouseleave="active = false"
      @blur="active = false"
      @click="$emit('close', $event)"
      @keydown="$emit('close', $event)"
    ></i>
  </span>
</template>

<script>
export default {
  data() {
    return {
      active: false,
    };
  },
};
</script>
