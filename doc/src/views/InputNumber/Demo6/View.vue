<template>
  <div>
    <sec-input-number v-model="num1" size="large"></sec-input-number>
    <sec-input-number v-model="num2" size="medium"></sec-input-number>
    <sec-input-number v-model="num3"></sec-input-number>
    <sec-input-number v-model="num4" size="mini"></sec-input-number>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num1: 1,
      num2: 1,
      num3: 1,
      num4: 1,
    };
  },
};
</script>

<style lang="less" scoped>
.sec-input-number + .sec-input-number {
  margin-left: 10px;
}
</style>
