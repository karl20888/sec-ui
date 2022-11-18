<template>
  <div class="doc-demo">
    <div class="doc-demo-source">
      <slot name="source"></slot>
    </div>
    <div
      class="doc-demo-meta"
      :class="{ 'is-expanded': isExpanded }"
    >
      <div v-if="$slots.default" class="doc-demo-desc">
        <slot></slot>
      </div>
      <markdown-it-vue :content="markdown"></markdown-it-vue>
    </div>
    <div
      class="doc-demo-control"
      @click="isExpanded = !isExpanded"
      @keydown="isExpanded = !isExpanded"
    >
      <i v-if="isExpanded" class="el-icon-caret-top"></i>
      <i v-else class="el-icon-caret-bottom"></i>
      <span>
        <template v-if="isExpanded">隐藏代码</template>
        <template v-else>显示代码</template>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    markdown: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      isExpanded: false,
    };
  },
};
</script>
