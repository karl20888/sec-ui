```vue
<template>
  <div>
    <div class="block">
      <span class="demonstration">页数较少时的效果</span>
      <sec-pager layout="prev, pager, next" :total="50"></sec-pager>
    </div>
    <div class="block">
      <span class="demonstration">大于 5 页时的效果</span>
      <sec-pager layout="prev, pager, next" :total="1000"></sec-pager>
    </div>
  </div>
</template>

<style lang="less" scoped>
.demonstration {
  display: block;
  text-align: right;
}
</style>
```