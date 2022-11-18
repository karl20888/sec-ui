```vue
<template>
  <el-carousel type="card" height="200px" :interval="4000">
    <el-carousel-item v-for="item in 6" :key="item" class="item">
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>

<style lang="less" scoped>
.item h3 {
  line-height: 200px;
  margin: 0;
  opacity: 0.75;
  font-size: 14px;
  color: #475669;
  text-align: center;
}

.item:nth-child(2n) {
  background-color: #99a9bf;
}

.item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
```