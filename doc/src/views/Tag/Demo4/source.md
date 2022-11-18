```vue
<template>
  <div>
    <sec-tag size="large" closable>大型标签</sec-tag>
    <sec-tag size="medium" closable>中等标签</sec-tag>
    <sec-tag closable>默认标签</sec-tag>
    <sec-tag size="mini" closable>超小标签</sec-tag>
  </div>
</template>

<style lang="less" scoped>
.sec-tag + .sec-tag {
  margin-left: 10px;
}
</style>
```