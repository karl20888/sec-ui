<template>
  <div>
    <sec-btn plain @click="open1">成功</sec-btn>
    <sec-btn plain @click="open2">警告</sec-btn>
    <sec-btn plain @click="open3">消息</sec-btn>
    <sec-btn plain @click="open4">错误</sec-btn>
  </div>
</template>

<script>
export default {
  methods: {
    open1() {
      this.$nofity({
        type: 'success',
        title: '成功',
        message: '这是一条成功的提示消息',
      });
    },
    open2() {
      this.$nofity({
        type: 'warning',
        title: '警告',
        message: '这是一条警告的提示消息',
      });
    },
    open3() {
      this.$nofity.info({
        title: '消息',
        message: '这是一条消息的提示消息',
      });
    },
    open4() {
      this.$nofity.error({
        title: '错误',
        message: '这是一条错误的提示消息',
      });
    },
  },
};
</script>
