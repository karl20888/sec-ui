```vue
<template>
  <div class="demo-type">
    <div>
      <sec-avatar icon="el-icon-user-solid"></sec-avatar>
    </div>
    <div>
      <sec-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></sec-avatar>
    </div>
    <div>
      <sec-avatar>user</sec-avatar>
    </div>
  </div>
</template>

<style lang="less" scoped>
.demo-type {
  display: flex;

  > div {
    flex: 1;
    text-align: center;

    &:not(:last-child) {
      border-right: 1px solid rgba(224, 230, 237, .5);
    }
  }
}
</style>
```