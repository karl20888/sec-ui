<template>
  <div>
    <sec-btn plain @click="open1">右上角</sec-btn>
    <sec-btn plain @click="open2">右下角</sec-btn>
    <sec-btn plain @click="open3">左下角</sec-btn>
    <sec-btn plain @click="open4">左上角</sec-btn>
  </div>
</template>

<script>
export default {
  methods: {
    open1() {
      this.$notify({
        title: '自定义位置',
        message: '右上角弹出的消息',
      });
    },
    open2() {
      this.$notify({
        title: '自定义位置',
        message: '右下角弹出的消息',
        position: 'bottom-right',
      });
    },
    open3() {
      this.$notify({
        title: '自定义位置',
        message: '左下角弹出的消息',
        position: 'bottom-left',
      });
    },
    open4() {
      this.$notify({
        title: '自定义位置',
        message: '左上角弹出的消息',
        position: 'top-left',
      });
    },
  },
};
</script>
