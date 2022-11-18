<template>
  <div class="sec-where-item" :style="{ 'justify-content': justifyContent }">
    <div class="sec-where-inner">
      <slot :row="value" :index="index"></slot>
    </div>
    <div class="sec-where-control">
      <slot name="control">
        <sec-btn
          icon="el-icon-remove"
          class="sec-where-btn sec-where-remove"
          title="删除"
          @click="$emit('remove')"
        ></sec-btn>
        <sec-btn
          icon="el-icon-circle-plus"
          class="sec-where-btn sec-where-add"
          title="添加"
          @click="$emit('add')"
        ></sec-btn>
        <sec-btn
          v-if="showCopy"
          icon="el-icon-document-copy"
          class="sec-where-btn sec-where-copy"
          title="复制"
          @click="$emit('copy')"
        ></sec-btn>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    value: {
      type: Object,
      default: () => ({}),
    },
    index: {
      type: String,
      default: '',
    },
    showCopy: {
      type: Boolean,
      default: false,
    },
    justifyContent: {
      type: String,
      default: 'space-between',
    },
  },
};
</script>
