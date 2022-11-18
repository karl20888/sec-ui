```vue
<template>
  <div>
    <sec-btn type="text" @click="open">点击打开 Dialog</sec-btn>
    <sec-dialog ref="dialog" title="提示" width="30%" center>
      <span>需要注意的是内容是默认不居中的</span>
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
  },
};
</script>
```