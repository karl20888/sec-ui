```vue
<template>
  <div>
    <sec-time-picker
      v-model="value1"
      range-separator="至"
      start-placeholder="开始时间"
      end-placeholder="结束时间"
      placeholder="选择时间范围"
      is-range
    ></sec-time-picker>
    <sec-time-picker
      v-model="value2"
      range-separator="至"
      start-placeholder="开始时间"
      end-placeholder="结束时间"
      placeholder="选择时间范围"
      is-range
      arrow-control
    ></sec-time-picker>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
      value2: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
    };
  },
};
</script>

<style lang="less" scoped>
.sec-time-picker + .sec-time-picker {
  margin-left: 10px;
}
</style>
```