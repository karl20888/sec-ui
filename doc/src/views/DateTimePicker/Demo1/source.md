```vue
<template>
  <div class="demo-datetime-picker">
    <div class="block">
      <span class="demonstration">默认</span>
      <sec-date-picker
        v-model="value1"
        type="datetime"
        placeholder="选择日期时间"
      ></sec-date-picker>
    </div>
    <div class="block">
      <span class="demonstration">带快捷选项</span>
      <sec-date-picker
        v-model="value2"
        type="datetime"
        placeholder="选择日期时间"
        align="right"
        :picker-options="pickerOptions"
      ></sec-date-picker>
    </div>
    <div class="block">
      <span class="demonstration">设置默认时间</span>
      <sec-date-picker
        v-model="value3"
        type="datetime"
        placeholder="选择日期时间"
        default-time="12:00:00"
      ></sec-date-picker>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pickerOptions: {
        shortcuts: [{
          text: '今天',
          onClick(picker) {
            picker.$emit('pick', new Date());
          },
        }, {
          text: '昨天',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            picker.$emit('pick', date);
          },
        }, {
          text: '一周前',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', date);
          },
        }],
      },
      value1: '',
      value2: '',
      value3: '',
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
    text-align: center;
    border-right: 1px solid #eff2f6;

    &:last-child {
      border-right: none;
    }
  }

  .demonstration {
    display: block;
    color: #8492a6;
    margin-bottom: 20px;
  }
}
</style>
```