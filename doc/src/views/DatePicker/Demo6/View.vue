<template>
  <div class="block">
    <p>组件值：{{ value }}</p>
    <sec-date-picker
      v-model="value"
      type="daterange"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      :default-time="['00:00:00', '23:59:59']"
    ></sec-date-picker>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
    };
  },
};
</script>

<style lang="less" scoped>
.block {
  padding: 30px 0;
  text-align: center;

  p {
    line-height: 1.5em;
    color: #5e6d82;
  }
}
</style>
