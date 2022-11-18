<template>
  <sec-row>
    <sec-col :span="12">
      <span class="demonstration">hover 激活</span>
      <sec-dropdown>
        <span class="text-primary">
          下拉菜单
          <i class="el-icon-arrow-down ml5"></i>
        </span>
        <sec-dropdown-menu>
        <sec-dropdown-item icon="el-icon-plus">黄金糕</sec-dropdown-item>
        <sec-dropdown-item icon="el-icon-circle-plus">狮子头</sec-dropdown-item>
        <sec-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</sec-dropdown-item>
        <sec-dropdown-item icon="el-icon-check">双皮奶</sec-dropdown-item>
        <sec-dropdown-item icon="el-icon-circle-check">蚵仔煎</sec-dropdown-item>
        </sec-dropdown-menu>
      </sec-dropdown>
    </sec-col>
    <sec-col :span="12">
      <span class="demonstration">click 激活</span>
      <sec-dropdown trigger="click">
        <span class="text-primary">
          下拉菜单
          <i class="el-icon-arrow-down ml5"></i>
        </span>
        <sec-dropdown-menu>
        <sec-dropdown-item icon="el-icon-plus">黄金糕</sec-dropdown-item>
        <sec-dropdown-item icon="el-icon-circle-plus">狮子头</sec-dropdown-item>
        <sec-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</sec-dropdown-item>
        <sec-dropdown-item icon="el-icon-check">双皮奶</sec-dropdown-item>
        <sec-dropdown-item icon="el-icon-circle-check">蚵仔煎</sec-dropdown-item>
        </sec-dropdown-menu>
      </sec-dropdown>
    </sec-col>
  </sec-row>
</template>

<style lang="less" scoped>
.sec-col {
  padding: 30px 0;
  border-right: 1px solid #eff2f6;
  text-align: center;
}

.demonstration {
  display: block;
  color: #8492a6;
  margin-bottom: 20px;
}
</style>
