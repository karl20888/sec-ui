```vue
<template>
  <sec-btn plain @click="open">偏移的消息</sec-btn>
</template>

<script>
export default {
  methods: {
    open() {
      this.$notify({
        title: '偏移',
        message: '这是一条带有偏移的提示消息',
        offset: 100,
      });
    },
  },
};
</script>
```