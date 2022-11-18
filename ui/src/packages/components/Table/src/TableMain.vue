<script>
import { filter } from 'lodash';
import { Table } from 'element-ui';
import TableCols from './TableCols.vue';

export default {
  inheritAttrs: false,
  components: {
    Table,
    TableCols,
  },
  props: {
    value: {
      type: [Array, Object],
      default: null,
    },
    rowKey: {
      type: [Function, String],
      default: null,
    },
    toggleColumnShow: {
      type: [Boolean, String],
      default: false,
    },
    columns: {
      type: Array,
      default: () => [],
    },
    colsMap: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      slots: null,
    };
  },
  watch: {
    colsMap: {
      immediate: true,
      deep: true,
      handler(val) {
        if (this.toggleColumnShow && val) {
          this.slots = null;
          setTimeout(() => {
            this.slots = filter(this.$slots.default, (VNode) => {
              const { prop, label } = VNode.componentOptions.propsData;
              if (prop && label) {
                return this.colsMap[prop];
              }
              return true;
            });
            this.$nextTick(() => {
              this.doLayout();
            });
          }, 20);
        }
      },
    },
  },
  mounted() {
    this.store = this.$refs.table.store;
  },
  methods: {
    clearSelection() {
      this.$refs.table.clearSelection();
    },
    toggleRowSelection(row, selected) {
      this.$refs.table.toggleRowSelection(row, selected);
    },
    toggleAllSelection() {
      this.$refs.table.toggleAllSelection();
    },
    toggleRowExpansion(row, expanded) {
      this.$refs.table.toggleRowExpansion(row, expanded);
    },
    setCurrentRow(row) {
      this.$refs.table.setCurrentRow(row);
    },
    clearSort() {
      this.$refs.table.clearSort();
    },
    clearFilter(columnKeys) {
      this.$refs.table.clearFilter(columnKeys);
    },
    doLayout() {
      this.$refs.table.doLayout();
    },
    sort(prop, order) {
      this.$refs.table.sort(prop, order);
    },
  },
  render(h) {
    const cols = [];
    if (this.value && this.rowKey) {
      cols.push(h('sec-table-column', {
        attrs: {
          type: 'selection',
          align: 'center',
          fixed: true,
          labelClassName: 'sec-table-selection-label',
        },
      }));
    }
    if (this.toggleColumnShow && this.columns.length) {
      if (this.slots) {
        cols.push(...this.slots);
      }
      cols.push(h('TableCols', {
        attrs: {
          columns: this.columns,
          colsMap: this.colsMap,
        },
        on: {
          click: (prop, value) => {
            this.$emit('setCol', prop, value);
          },
          checkAll: () => {
            this.$emit('checkAllCols');
          },
          reset: () => {
            this.$emit('resetCols');
          },
        },
      }));
    } else if (this.$slots.default) {
      cols.push(...this.$slots.default);
    }
    cols.push(
      h('template', { slot: 'append' }, this.$slots.append),
      h('template', { slot: 'empty' }, this.$slots.empty),
    );
    return h('Table', {
      ref: 'table',
      class: 'sec-table',
      attrs: {
        ...this.$attrs,
        rowKey: this.rowKey,
      },
      on: {
        ...this.$listeners,
      },
      slot: {
        append: this.$slots.append,
        empty: this.$slots.empty,
      },
    }, cols);
  },
};
</script>
