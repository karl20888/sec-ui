```vue
<template>
  <div>
    <sec-alert title="不可关闭的 alert" type="success" :closable="false"></sec-alert>
    <sec-alert title="自定义 close-text" type="info" close-text="知道了"></sec-alert>
    <sec-alert title="设置了回调的 alert" type="warning" @close="hello"></sec-alert>
  </div>
</template>

<script>
export default {
  methods: {
    hello() {
      alert('Hello World!');
    },
  },
};
</script>

<style lang="less" scoped>
.sec-alert {
  margin-top: 20px;

  &:first-child {
    margin-top: 0;
  }
}
</style>
```