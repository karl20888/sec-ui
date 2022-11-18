<template>
  <div>
    <sec-switch
      v-model="value1"
      active-text="按月付费"
      inactive-text="按年付费"
    ></sec-switch>
    <sec-switch
      v-model="value2"
      active-color="#13ce66"
      inactive-color="#ff4949"
      active-text="按月付费"
      inactive-text="按年付费"
    ></sec-switch>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: true,
      value2: true,
    };
  },
};
</script>

<style lang="less" scoped>
.sec-switch {
  display: block;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
