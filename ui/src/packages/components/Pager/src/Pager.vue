<template>
  <Pagination
    class="sec-pager"
    v-bind="$attrs"
    v-on="$listeners"
    :class="[`sec-pager-${align}`]"
    :layout="layout"
    :background="background"
    :page-sizes="pageSizesOption"
    :pager-count="pagerCount"
    :page-size="value ? pager.pageSize : pageSize"
    :current-page="value ? pager.page : currentPage"
    :total="totalNum"
    @size-change="onSizeChange"
    @current-change="onCurrentChange"
  >
    <div class="sec-pager-slot">
      <slot></slot>
    </div>
  </Pagination>
</template>

<script>
import { Pagination } from 'element-ui';
import { defaults, isNumber, map } from 'lodash';

export default {
  name: 'ElPagination',
  componentName: 'SecPager',
  inheritAttrs: false,
  components: {
    Pagination,
  },
  props: {
    value: {
      type: Object,
      default: null,
    },
    align: {
      type: String,
      default: 'right',
    },
    layout: {
      type: String,
      default: 'prev, pager, next, sizes, total, jumper',
    },
    background: {
      type: Boolean,
      default: true,
    },
    pageSizes: {
      type: Array,
      default: () => [10, 20, 50, 100],
    },
    pageSizesBase: {
      type: [Number, Object],
      default: null,
    },
    pagerCount: {
      type: Number,
      default: 5,
    },
    pageSize: {
      type: Number,
      default: 10,
    },
    currentPage: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      defaultOptions: {
        page: 1,
        pageSize: 10,
        total: 0,
      },
    };
  },
  computed: {
    pager: {
      get() {
        return defaults(this.value, this.defaultOptions);
      },
      set(val) {
        this.$emit('input', val);
        this.$emit('change', val);
      },
    },
    totalNum() {
      if (this.total) {
        return this.total;
      }
      return this.pager.total;
    },
    pageSizesOption() {
      if (this.pageSizesBase) {
        if (isNumber(this.pageSizesBase)) {
          return map([1, 2, 5, 10], (i) => i * this.pageSizesBase);
        }
        return map(this.pageSizesBase.steps, (i) => i * this.pageSizesBase.base);
      }
      return this.pageSizes;
    },
  },
  methods: {
    onSizeChange(pageSize) {
      this.pager = { ...this.pager, pageSize };
      this.$emit('update:pageSize', pageSize);
    },
    onCurrentChange(page) {
      this.pager = { ...this.pager, page };
      this.$emit('update:currentPage', page);
    },
  },
};
</script>
