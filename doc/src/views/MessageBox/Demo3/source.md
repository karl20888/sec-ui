```vue
<template>
  <sec-btn type="text" @click="open">点击打开 Message Box</sec-btn>
</template>

<script>
export default {
  methods: {
    open() {
      this.$prompt('请输入邮箱', '提示', {
        inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        inputErrorMessage: '邮箱格式不正确',
      }).then(({ value }) => {
        this.$message.success(`你的邮箱是：${value}`);
      }).catch(() => {
        this.$message.info('取消输入');
      });
    },
  },
};
</script>
```