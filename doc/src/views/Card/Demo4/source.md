```vue
<template>
  <sec-row :gutter="12">
    <sec-col :span="8">
      <sec-card shadow="always">
        总是显示
      </sec-card>
    </sec-col>
    <sec-col :span="8">
      <sec-card shadow="hover">
        鼠标悬浮时显示
      </sec-card>
    </sec-col>
    <sec-col :span="8">
      <sec-card shadow="never">
        从不显示
      </sec-card>
    </sec-col>
  </sec-row>
</template>
```