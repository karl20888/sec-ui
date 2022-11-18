```vue
<template>
  <div class="demo-date-picker">
    <div class="container">
      <div class="block">
        <span class="demonstration">周</span>
        <sec-date-picker
          v-model="value1"
          type="week"
          format="yyyy 第 WW 周"
          placeholder="选择周"
        ></sec-date-picker>
      </div>
      <div class="block">
        <span class="demonstration">月</span>
        <sec-date-picker
          v-model="value2"
          type="month"
          placeholder="选择月"
        ></sec-date-picker>
      </div>
    </div>
    <div class="container">
      <div class="block">
        <span class="demonstration">年</span>
        <sec-date-picker
          v-model="value3"
          type="year"
          placeholder="选择年"
        ></sec-date-picker>
      </div>
      <div class="block">
        <span class="demonstration">多个日期</span>
        <sec-date-picker
          v-model="value4"
          type="dates"
          placeholder="选择一个或多个日期"
        ></sec-date-picker>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: '',
      value2: '',
      value3: '',
      value4: '',
    };
  },
};
</script>

<style lang="less" scoped>
.demo-date-picker {
  display: flex;
  flex-wrap: wrap;

  .container {
    flex: 1;
    border-right: 1px solid #eff2f6;

    .block {
      padding: 30px 0;
      text-align: center;

      &:last-child {
        border-top: 1px solid #eff2f6;
      }
    }

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
```