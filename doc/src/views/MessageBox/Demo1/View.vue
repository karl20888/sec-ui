<template>
  <sec-btn type="text" @click="open">点击打开 Message Box</sec-btn>
</template>

<script>
export default {
  methods: {
    open() {
      this.$alert('这是一段内容', '标题名称', {
        callback: (action) => {
          this.$message.info(`action: ${action}`);
        },
      });
    },
  },
};
</script>
