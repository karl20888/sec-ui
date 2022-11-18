<template>
  <sec-popover
    v-model="visible"
    :placement="popoverPlacement"
    :trigger="popoverTrigger"
    :width="popoverWidth"
  >
    <sec-form
      :label-width="labelWidth"
      :extra-width="extraWidth"
      label-position="right"
      class="mt15"
      is-table-filter-form
    >
      <slot></slot>
      <sec-form-item>
        <sec-btn @click="visible = false">关闭</sec-btn>
      </sec-form-item>
    </sec-form>
    <template #reference>
      <sec-btn>
        <span>更多条件</span>
        <i class="el-icon-arrow-down ml5"></i>
      </sec-btn>
    </template>
  </sec-popover>
</template>

<script>
export default {
  props: {
    popoverWidth: {
      type: String,
      default: '400',
    },
    popoverPlacement: {
      type: String,
      default: 'bottom-start',
    },
    popoverTrigger: {
      type: String,
      default: 'click',
    },
    labelWidth: {
      type: String,
      default: '80px',
    },
    extraWidth: {
      type: String,
      default: '20px',
    },
  },
  data() {
    return {
      visible: false,
    };
  },
};
</script>
