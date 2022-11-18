```vue
<template>
  <div>
    <sec-btn type="text" @click="open">点击打开 Dialog</sec-btn>
    <sec-dialog
      ref="dialog"
      title="提示"
      width="30%"
      :before-close="handleClose"
    >
      <span>这是一段信息</span>
      <template #footer>
        <sec-btn @click="close">取消</sec-btn>
        <sec-btn type="primary" @click="close">确定</sec-btn>
      </template>
    </sec-dialog>
  </div>
</template>

<script>
export default {
  methods: {
    open() {
      this.$refs.dialog.open();
    },
    close() {
      this.$refs.dialog.close();
    },
    handleClose(done) {
      this.$confirm('确认关闭？').then(() => {
        done();
      }).catch(() => {});
    },
  },
};
</script>
```