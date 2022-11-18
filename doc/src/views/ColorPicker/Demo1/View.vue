<template>
  <div>
    <div class="block">
      <span class="demonstration">有默认值</span>
      <sec-color-picker v-model="color1"></sec-color-picker>
    </div>
    <div class="block">
      <span class="demonstration">无默认值</span>
      <sec-color-picker v-model="color2"></sec-color-picker>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      color1: '#F08300',
      color2: null,
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
}

.demonstration {
  display: block;
  color: #8492a6;
  margin-bottom: 20px;
}
</style>
