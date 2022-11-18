```vue
<template>
  <div class="demo-date-picker">
    <div class="block">
      <span class="demonstration">默认为 Date 对象</span>
      <div class="demonstration">值：{{ value1 }}</div>
      <sec-date-picker
        v-model="value1"
        type="date"
        placeholder="选择日期"
        format="yyyy 年 MM 月 dd 日"
      ></sec-date-picker>
    </div>
    <div class="block">
      <span class="demonstration">使用 value-format</span>
      <div class="demonstration">值：{{ value2 }}</div>
      <sec-date-picker
        v-model="value2"
        type="date"
        placeholder="选择日期"
        format="yyyy 年 MM 月 dd 日"
        value-format="yyyy-MM-dd"
      ></sec-date-picker>
    </div>
    <div class="block">
      <span class="demonstration">时间戳</span>
      <div class="demonstration">值：{{ value3 }}</div>
      <sec-date-picker
        v-model="value3"
        type="date"
        placeholder="选择日期"
        format="yyyy 年 MM 月 dd 日"
        value-format="timestamp"
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
      value3: '',
    };
  },
};
</script>

<style lang="less" scoped>
.demo-date-picker {
  display: flex;
  flex-wrap: wrap;

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
```