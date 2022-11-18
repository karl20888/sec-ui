```vue
<template>
  <sec-btn type="text" @click="open">点击打开 Message Box</sec-btn>
</template>

<script>
export default {
  methods: {
    open() {
      this.$confirm('此操作将永久删除该文件，是否继续？', '提示', {
        type: 'warning',
        center: true,
      }).then(() => {
        this.$message.success('删除成功');
      }).catch(() => {
        this.$message.info('已取消删除');
      });
    },
  },
};
</script>
```