```vue
<template>
  <sec-input v-model="input" placeholder="请输入密码" show-password></sec-input>
</template>

<script>
export default {
  data() {
    return {
      input: '',
    };
  },
};
</script>

<style lang="less" scoped>
.sec-input {
  width: 180px;
}
</style>
```