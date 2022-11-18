```vue
<template>
  <div>
    <div class="block">
      <span class="demonstration">默认</span>
      <sec-slider v-model="value1"></sec-slider>
    </div>
    <div class="block">
      <span class="demonstration">自定义初始值</span>
      <sec-slider v-model="value2"></sec-slider>
    </div>
    <div class="block">
      <span class="demonstration">隐藏 Tooltip</span>
      <sec-slider v-model="value3" :show-tooltip="false"></sec-slider>
    </div>
    <div class="block">
      <span class="demonstration">格式化 Tooltip</span>
      <sec-slider v-model="value4" :format-tooltip="formatTooltip"></sec-slider>
    </div>
    <div class="block">
      <span class="demonstration">禁用</span>
      <sec-slider v-model="value5" disabled></sec-slider>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: 0,
      value2: 50,
      value3: 36,
      value4: 48,
      value5: 42,
    };
  },
  methods: {
    formatTooltip(val) {
      return val / 100;
    },
  },
};
</script>

<style lang="less" scoped>
.block {
  padding: 30px 24px;
  overflow: hidden;
  border-bottom: 1px solid #eff2f6;

  &:last-child {
    border-bottom: none;
  }
}

.demonstration {
  color: #8492a6;
  line-height: 44px;
}

.sec-slider {
  float: right;
  width: 70%;
  margin-right: 20px;
}
</style>
```