<template>
  <div class="demo-datetime-picker">
    <div class="block">
      <span class="demonstration">起始日期时刻为 12:00:00</span>
      <sec-date-picker
        v-model="value1"
        type="datetimerange"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :default-time="['12:00:00']"
      ></sec-date-picker>
    </div>
    <div class="block">
      <span class="demonstration">起始日期时刻为 12:00:00，结束日期时刻为 00:00:00</span>
      <sec-date-picker
        v-model="value2"
        type="datetimerange"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :default-time="['12:00:00', '08:00:00']"
      ></sec-date-picker>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: '',
      value2: '',
    };
  },
};
</script>

<style lang="less" scoped>
.demo-datetime-picker {
  display: flex;

  .block {
    flex: 1;
    padding: 30px 0;
    border-right: 1px solid #eff2f6;
    text-align: center;

    &:last-child {
      border-right: none;
    }
  }

  .demonstration {
    display: block;
    margin-bottom: 20px;
    color: #8492a6;
  }
}
</style>
