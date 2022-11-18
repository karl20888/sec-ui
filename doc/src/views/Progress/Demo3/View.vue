<template>
  <div>
    <sec-progress :percentage="percentage" :color="customColor"></sec-progress>
    <sec-progress :percentage="percentage" :color="customColorMethod"></sec-progress>
    <sec-progress :percentage="percentage" :color="customColors"></sec-progress>
    <sec-btn-group>
      <sec-btn icon="el-icon-minus" @click="decrease"></sec-btn>
      <sec-btn icon="el-icon-plus" @click="increase"></sec-btn>
    </sec-btn-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      percentage: 20,
      customColor: '#409eff',
      customColors: [
        { color: '#f56c6c', percentage: 20 },
        { color: '#e6a23c', percentage: 40 },
        { color: '#5cb87a', percentage: 60 },
        { color: '#1989fa', percentage: 80 },
        { color: '#6f7ad3', percentage: 100 },
      ],
    };
  },
  methods: {
    customColorMethod(percentage) {
      if (percentage < 30) {
        return '#909399';
      } if (percentage < 70) {
        return '#e6a23c';
      }
      return '#67c23a';
    },
    increase() {
      this.percentage += 10;
      if (this.percentage > 100) {
        this.percentage = 100;
      }
    },
    decrease() {
      this.percentage -= 10;
      if (this.percentage < 0) {
        this.percentage = 0;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.sec-progress {
  width: 350px;
  margin-bottom: 15px;
}
</style>
