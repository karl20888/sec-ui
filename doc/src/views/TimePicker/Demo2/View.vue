<template>
  <div>
    <sec-time-picker
      v-model="value1"
      placeholder="任意时间点"
      :picker-options="{
        selectableRange: '18:30:00 - 20:30:00',
      }"
    ></sec-time-picker>
    <sec-time-picker
      v-model="value2"
      placeholder="任意时间点"
      arrow-control
      :picker-options="{
        selectableRange: '18:30:00 - 20:30:00',
      }"
    ></sec-time-picker>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: new Date(2016, 9, 10, 18, 40),
      value2: new Date(2016, 9, 10, 18, 40),
    };
  },
};
</script>

<style lang="less" scoped>
.sec-time-picker + .sec-time-picker {
  margin-left: 10px;
}
</style>
