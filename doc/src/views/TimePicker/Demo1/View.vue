<template>
  <sec-time-select
    v-model="value"
    placeholder="选择时间"
    :picker-options="{
      start: '08:30',
      step: '00:15',
      end: '18:30',
    }"
  ></sec-time-select>
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
