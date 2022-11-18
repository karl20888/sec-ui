```vue
<template>
  <sec-btn plain @click="open">隐藏关闭按钮</sec-btn>
</template>

<script>
export default {
  methods: {
    open() {
      this.$notify.success({
        title: 'Info',
        message: '这是一条没有关闭按钮的消息',
        showClose: false,
      });
    },
  },
};
</script>
```