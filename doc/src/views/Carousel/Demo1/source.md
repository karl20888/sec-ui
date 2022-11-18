```vue
<template>
  <div>
    <div class="block">
      <span class="demonstration">默认 Hover 指示器触发</span>
      <el-carousel height="150px">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="block">
      <span class="demonstration">Click 指示器触发</span>
      <el-carousel height="150px" trigger="click">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<style lang="less" scoped>
.block {
  display: inline-block;
  width: 50%;
  padding: 30px;
  border-right: 1px solid #eff2f6;
  text-align: center;

  &:last-child {
    border-right: none;
  }

  :deep(.el-carousel__item) {
    &:nth-child(odd) {
      background-color: #d3dce6;
    }

    &:nth-child(2n) {
      background-color: #99a9bf;
    }
  }
}

.demonstration {
  display: block;
  margin-bottom: 20px;
  color: #8492a6;
}

h3 {
  line-height: 150px;
  color: #fff;
  margin: 0;
  font-size: 14px;
}
</style>
```