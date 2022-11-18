<template>
  <Option
    ref="option"
    class="sec-select-dropdown__item"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot></slot>
  </Option>
</template>

<script>
import { Option } from 'element-ui';

export default {
  name: 'ElOption',
  componentName: 'SecOption',
  inheritAttrs: false,
  components: {
    Option,
  },
  data() {
    return {
      visible: true,
    };
  },
  mounted() {
    if (this?.$parent?.$options?.componentName === 'ElOptionGroup') {
      this.$refs.option.$on('queryChange', () => {
        this.visible = this.$refs.option.visible;
      });
    }
  },
};
</script>
