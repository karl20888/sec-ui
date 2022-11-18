```vue
<template>
  <div>
    <sec-progress type="dashboard" :percentage="percentage" :color="colors"></sec-progress>
    <div>
      <sec-btn-group>
        <sec-btn icon="el-icon-minus" @click="decrease"></sec-btn>
        <sec-btn icon="el-icon-plus" @click="increase"></sec-btn>
      </sec-btn-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      percentage: 10,
      colors: [
        { color: '#f56c6c', percentage: 20 },
        { color: '#e6a23c', percentage: 40 },
        { color: '#5cb87a', percentage: 60 },
        { color: '#1989fa', percentage: 80 },
        { color: '#6f7ad3', percentage: 100 },
      ],
    };
  },
  methods: {
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
```