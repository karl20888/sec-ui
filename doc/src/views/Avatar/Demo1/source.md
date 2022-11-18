```vue
<template>
  <sec-row class="demo-avatar">
    <sec-col :span="12">
      <div class="sub-title">circle</div>
      <div class="demo-basic--circle">
        <div class="block">
          <sec-avatar :size="50" :src="circleUrl"></sec-avatar>
        </div>
        <div class="block" v-for="size in sizeList" :key="size">
          <sec-avatar :size="size" :src="circleUrl"></sec-avatar>
        </div>
      </div>
    </sec-col>
    <sec-col :span="12">
      <div class="sub-title">square</div>
      <div class="demo-basic--circle">
        <div class="block">
          <sec-avatar shape="square" :size="50" :src="squareUrl"></sec-avatar>
        </div>
        <div class="block" v-for="size in sizeList" :key="size">
          <sec-avatar shape="square" :size="size" :src="squareUrl"></sec-avatar>
        </div>
      </div>
    </sec-col>
  </sec-row>
</template>

<script>
export default {
  data() {
    return {
      circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      squareUrl: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
      sizeList: ['large', 'medium', 'small'],
    };
  },
};
</script>

<style lang="less" scoped>
.demo-avatar {
  text-align: center;

  .sec-col:not(:last-child) {
    border-right: 1px solid rgba(224, 230, 237, .5);
  }

  .sub-title {
    margin-bottom: 10px;
    color: #8492a6;
  }

  .demo-basic--circle {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .block {
      flex: 1;

      &:not(:last-child) {
        border-right: 1px solid rgba(224, 230, 237, .5);
      }
    }
  }
}
</style>
```