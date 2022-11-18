```vue
<template>
  <sec-btn plain @click="openCenter">文字居中</sec-btn>
</template>

<script>
export default {
  methods: {
    openCenter() {
      this.$message({
        message: '居中的文字',
        center: true,
      });
    },
  },
};
</script>
```