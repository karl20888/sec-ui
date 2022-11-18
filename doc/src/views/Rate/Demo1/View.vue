<template>
  <div>
    <div class="block">
      <span class="demonstration">默认不区分颜色</span>
      <sec-rate v-model="value1"></sec-rate>
    </div>
    <div class="block">
      <span class="demonstration">区分颜色</span>
      <sec-rate v-model="value2" :colors="colors"></sec-rate>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: null,
      value2: null,
      colors: ['#99a9bf', '#f7ba2a', '#ff9900'],
      // 等同于 { 2: '#99a9bf', 4: { value: '#f7ba2a', excluded: true }, 5: '#ff9900' }
    };
  },
};
</script>

<style lang="less" scoped>
.block {
  display: inline-block;
  width: 50%;
  padding: 30px 0;
  text-align: center;
  border-right: 1px solid #eff2f6;

  &:last-child {
    border-right: none;
  }
}

.demonstration {
  display: block;
  color: #8492a6;
  margin-bottom: 20px;
}
</style>
