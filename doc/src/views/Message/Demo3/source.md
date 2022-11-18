```vue
<template>
  <div>
    <sec-btn plain @click="open1">消息</sec-btn>
    <sec-btn plain @click="open2">成功</sec-btn>
    <sec-btn plain @click="open3">警告</sec-btn>
    <sec-btn plain @click="open4">错误</sec-btn>
  </div>
</template>

<script>
export default {
  methods: {
    open1() {
      this.$message({
        message: '这是一条消息提示',
        showClose: true,
      });
    },
    open2() {
      this.$message({
        type: 'success',
        message: '恭喜你，这是一条成功消息',
        showClose: true,
      });
    },
    open3() {
      this.$message({
        type: 'warning',
        message: '警告哦，这是一条警告消息',
        showClose: true,
      });
    },
    open4() {
      this.$message({
        type: 'error',
        message: '错了哦，这是一条错误消息',
        showClose: true,
      });
    },
  },
};
</script>
```