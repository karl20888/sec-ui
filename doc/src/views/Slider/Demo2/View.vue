<template>
  <div>
    <div class="block">
      <span class="demonstration">不显示间断点</span>
      <sec-slider v-model="value1" :step="10"></sec-slider>
    </div>
    <div class="block">
      <span class="demonstration">显示间断点</span>
      <sec-slider v-model="value2" show-stops :step="10"></sec-slider>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: 0,
      value2: 0,
    };
  },
};
</script>

<style lang="less" scoped>
.block {
  padding: 30px 24px;
  overflow: hidden;
  border-bottom: 1px solid #eff2f6;

  &:last-child {
    border-bottom: none;
  }
}

.demonstration {
  line-height: 44px;
  color: #8492a6;
}

.sec-slider {
  float: right;
  width: 70%;
  margin-right: 20px;
}
</style>
