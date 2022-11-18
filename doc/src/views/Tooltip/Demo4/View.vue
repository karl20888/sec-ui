<template>
  <sec-tooltip content="点击关闭 tooltip 功能" :disabled="disabled">
    <sec-btn @click="disabled = !disabled">点击{{ disabled ? '开启' : '关闭' }} tooltip 功能</sec-btn>
  </sec-tooltip>
</template>

<script>
export default {
  data() {
    return {
      disabled: false,
    };
  },
};
</script>
