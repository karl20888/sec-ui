```vue
<template>
  <sec-card>
    <div v-for="o in 4" :key="o" class="item">
      {{ `列表内容 ${o}` }}
    </div>
  </sec-card>
</template>

<style lang="less" scoped>
.sec-card {
  width: 480px;
}

.item {
  padding: 18px 0;
}
</style>
```