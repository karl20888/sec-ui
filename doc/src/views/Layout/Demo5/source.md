```vue
<template>
  <div>
    <sec-row type="flex" class="row-bg">
      <sec-col :span="6"><div class="grid-content bg-purple"></div></sec-col>
      <sec-col :span="6"><div class="grid-content bg-purple-light"></div></sec-col>
      <sec-col :span="6"><div class="grid-content bg-purple"></div></sec-col>
    </sec-row>
    <sec-row type="flex" class="row-bg" justify="center">
      <sec-col :span="6"><div class="grid-content bg-purple"></div></sec-col>
      <sec-col :span="6"><div class="grid-content bg-purple-light"></div></sec-col>
      <sec-col :span="6"><div class="grid-content bg-purple"></div></sec-col>
    </sec-row>
    <sec-row type="flex" class="row-bg" justify="end">
      <sec-col :span="6"><div class="grid-content bg-purple"></div></sec-col>
      <sec-col :span="6"><div class="grid-content bg-purple-light"></div></sec-col>
      <sec-col :span="6"><div class="grid-content bg-purple"></div></sec-col>
    </sec-row>
    <sec-row type="flex" class="row-bg" justify="space-between">
      <sec-col :span="6"><div class="grid-content bg-purple"></div></sec-col>
      <sec-col :span="6"><div class="grid-content bg-purple-light"></div></sec-col>
      <sec-col :span="6"><div class="grid-content bg-purple"></div></sec-col>
    </sec-row>
    <sec-row type="flex" class="row-bg" justify="space-around">
      <sec-col :span="6"><div class="grid-content bg-purple"></div></sec-col>
      <sec-col :span="6"><div class="grid-content bg-purple-light"></div></sec-col>
      <sec-col :span="6"><div class="grid-content bg-purple"></div></sec-col>
    </sec-row>
  </div>
</template>

<style lang="less" scoped>
.sec-row {
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
}

.sec-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
```