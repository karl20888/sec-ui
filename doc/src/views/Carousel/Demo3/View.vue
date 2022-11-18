<template>
  <el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="item in 4" :key="item" class="item">
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>

<style lang="less" scoped>
.item h3 {
  line-height: 300px;
  margin: 0;
  opacity: 0.75;
  font-size: 18px;
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
