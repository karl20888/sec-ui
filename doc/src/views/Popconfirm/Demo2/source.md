```vue
<template>
  <sec-popconfirm
    confirm-button-text="好的"
    cancel-button-text="不用了"
    icon="el-icon-info"
    icon-color="red"
    title="这是一段内容确定删除吗？"
  >
    <template #reference>
      <sec-btn>删除</sec-btn>
    </template>
  </sec-popconfirm>
</template>
```