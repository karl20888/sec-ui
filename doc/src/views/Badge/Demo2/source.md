```vue
<template>
  <div>
    <sec-badge :value="200" :max="99">
      <sec-btn>评论</sec-btn>
    </sec-badge>
    <sec-badge :value="100" :max="10">
      <sec-btn>回复</sec-btn>
    </sec-badge>
  </div>
</template>

<style lang="less" scoped>
.sec-badge {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```