```vue
<template>
  <div>
    <sec-btn plain @click="open1">可自动关闭</sec-btn>
    <sec-btn plain @click="open2">不会自动关闭</sec-btn>
  </div>
</template>

<script>
export default {
  methods: {
    open1() {
      const h = this.$createElement;
      this.$notify({
        title: '标题名称',
        message: h('i', { style: 'color: teal' }, '这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案'),
      });
    },
    open2() {
      this.$notify({
        title: '提示',
        message: '这是一条不会自动关闭的消息',
        duration: 0,
      });
    },
  },
};
</script>
```