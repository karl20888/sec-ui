```vue
<template>
  <el-descriptions
    title="自定义样式列表"
    border
    :column="3"
  >
    <el-descriptions-item
      label="用户名"
      label-class-name="my-label"
      content-class-name="my-content"
    >kooriookami</el-descriptions-item>
    <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
    <el-descriptions-item label="居住地">苏州市</el-descriptions-item>
    <el-descriptions-item label="备注">
      <el-tag size="small">学校</el-tag>
    </el-descriptions-item>
    <el-descriptions-item
      label="联系地址"
      :content-style="{ 'text-align': 'right' }"
    >江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
  </el-descriptions>
</template>

<style lang="less" scoped>
.my-label {
  background-color: #e1f3d8;
}

.my-content {
  background-color: #fde2e2;
}
</style>
```