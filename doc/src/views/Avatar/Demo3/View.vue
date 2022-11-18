<template>
  <sec-avatar :size="60" src="https://empty" @error="errorHandler">
    <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" alt="头像">
  </sec-avatar>
</template>

<script>
export default {
  methods: {
    errorHandler() {
      return true;
    },
  },
};
</script>
