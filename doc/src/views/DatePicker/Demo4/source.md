```vue
<template>
  <div class="demo-date-picker">
    <div class="block">
      <span class="demonstration">默认</span>
      <sec-date-picker
        v-model="value1"
        type="monthrange"
        range-separator="至"
        start-placeholder="开始月份"
        end-placeholder="结束月份"
      ></sec-date-picker>
    </div>
    <div class="block">
      <span class="demonstration">带快捷选项</span>
      <sec-date-picker
        v-model="value2"
        type="monthrange"
        align="right"
        range-separator="至"
        start-placeholder="开始月份"
        end-placeholder="结束月份"
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
          text: '本月',
          onClick(picker) {
            picker.$emit('pick', [new Date(), new Date()]);
          },
        }, {
          text: '今年至今',
          onClick(picker) {
            const end = new Date();
            const start = new Date(new Date().getFullYear(), 0);
            picker.$emit('pick', [start, end]);
          },
        }, {
          text: '最近六个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setMonth(start.getMonth() - 6);
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