<template>
  <div>
    <sec-time-select
      v-model="startTime"
      placeholder="起始时间"
      :picker-options="{
        start: '08:30',
        step: '00:15',
        end: '18:30',
      }"
    ></sec-time-select>
    <sec-time-select
      v-model="endTime"
      placeholder="结束时间"
      :picker-options="{
        start: '08:30',
        step: '00:15',
        end: '18:30',
        minTime: startTime,
      }"
    ></sec-time-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      startTime: '',
      endTime: '',
    };
  },
};
</script>

<style lang="less" scoped>
.sec-time-select + .sec-time-select {
  margin-left: 10px;
}
</style>
