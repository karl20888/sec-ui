<template>
  <sec-table-column
    fixed="right"
    width="40"
    align="center"
  >
    <template #header>
      <sec-popover popper-class="sec-table-columns-popover">
        <div class="sec-table-cols">
          <div class="sec-table-cols-btns">
            <div
              class="sec-table-cols-btn"
              :class="[checkAll ? 'is-active' : 'is-not-all']"
              @click="$emit('checkAll')"
              @keydown="$emit('checkAll')"
            >
              <sec-icon name="eye-close" class="mr5"></sec-icon>
              <span>全选</span>
            </div>
            <div
              class="sec-table-cols-btn"
              @click="$emit('reset')"
              @keydown="$emit('reset')"
            >
              <i class="el-icon-refresh-left mr5"></i>
              <span>重置</span>
            </div>
          </div>
          <div class="sec-table-cols-list">
            <div
              class="sec-table-cols-btn"
              v-for="item in columns"
              :key="item.prop"
              :class="{
                'is-active': colsMap[item.prop],
                'is-disabled': item.alwaysShow,
              }"
              @click="onClick(item)"
              @keydown="onClick(item)"
            >
              <sec-icon :name="`eye${colsMap[item.prop] ? '' : '-close'}`" class="mr5"></sec-icon>
              <span>{{ item.label }}</span>
            </div>
          </div>
        </div>
        <template #reference>
          <sec-icon name="cols-two" class="fz16 cur-p"></sec-icon>
        </template>
      </sec-popover>
    </template>
  </sec-table-column>
</template>

<script>
import { every } from 'lodash';

export default {
  inheritAttrs: false,
  props: {
    columns: {
      type: Array,
      default: () => [],
    },
    colsMap: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    checkAll() {
      return every(this.columns, ({ prop }) => this.colsMap[prop]);
    },
  },
  methods: {
    onClick(item) {
      this.$emit('click', item.prop, !this.colsMap[item.prop]);
    },
  },
};
</script>
