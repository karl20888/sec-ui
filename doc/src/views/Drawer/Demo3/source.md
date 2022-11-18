```vue
<template>
  <div>
    <sec-btn type="primary" @click="open">点我打开</sec-btn>
    <sec-drawer ref="drawer" :with-header="false">
      我来啦！
      <template #footer>
        <sec-btn @click="close">关闭</sec-btn>
        <sec-btn type="primary" @click="close">确定</sec-btn>
      </template>
    </sec-drawer>
  </div>
</template>

<script>
export default {
  methods: {
    open() {
      this.$refs.drawer.open();
    },
    close() {
      this.$refs.drawer.close();
    },
  },
};
</script>
```