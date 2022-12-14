```vue
<template>
  <div class="demo-date-picker">
    <div class="block">
      <span class="demonstration">默认</span>
      <sec-date-picker
        v-model="value1"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
      ></sec-date-picker>
    </div>
    <div class="block">
      <span class="demonstration">带快捷选项</span>
      <sec-date-picker
        v-model="value2"
        type="daterange"
        align="right"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        unlink-panels
        :picker-options="pickerOptions"
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
          text: '最近一周',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          },
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          },
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          },
        }],
      },
      value1: '',
      value2: '',
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
  }

  .demonstration {
    display: block;
    margin-bottom: 20px;
    color: #8492a6;
  }
}
</style>
```