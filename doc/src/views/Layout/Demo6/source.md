```vue
<template>
  <sec-row :gutter="10">
    <sec-col
      :xs="8"
      :sm="6"
      :md="4"
      :lg="3"
      :xl="1"
    >
      <div class="grid-content bg-purple"></div>
    </sec-col>
    <sec-col
      :xs="4"
      :sm="6"
      :md="8"
      :lg="9"
      :xl="11"
    >
      <div class="grid-content bg-purple-light"></div>
    </sec-col>
    <sec-col
      :xs="4"
      :sm="6"
      :md="8"
      :lg="9"
      :xl="11"
    >
      <div class="grid-content bg-purple"></div>
    </sec-col>
    <sec-col
      :xs="8"
      :sm="6"
      :md="4"
      :lg="3"
      :xl="1"
    >
      <div class="grid-content bg-purple-light"></div>
    </sec-col>
  </sec-row>
</template>

<style lang="less" scoped>
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
</style>
```