<template>
  <div :class="{
    'sec-table-wrap': $scopedSlots.filter || $scopedSlots.extra || pager || $scopedSlots.card,
    'sec-table-full': full,
  }">
    <div
      :class="{
        'sec-table-header': $scopedSlots.filter
          || $scopedSlots.extra
          || ($scopedSlots.control && selectedCount)
          || $scopedSlots.card
      }"
    >
      <template v-if="$scopedSlots.control && selectedCount">
        <div class="sec-table-state">
          已选择
          <strong>{{ selectedCount }}</strong>
          项
        </div>
        <div class="sec-table-control">
          <slot name="control"></slot>
        </div>
        <sec-btn
          type="primary"
          icon="el-icon-close"
          class="sec-table-clear"
          size="mini"
          @click="selected = []"
          plain
        ></sec-btn>
      </template>
      <template v-if="!$scopedSlots.control || !selectedCount">
        <div class="sec-table-filter">
          <TableFilter
            v-if="$scopedSlots.filter"
            :slots="$scopedSlots.filter()"
            :max="filterMax"
            :append="filterAppend"
            :moreOptions="filterMoreOptions"
            @refresh="$emit('refresh')"
            @change="onFilterChange"
          >
            <template v-if="$scopedSlots['filter-append']" #append>
              <slot name="filter-append"></slot>
            </template>
          </TableFilter>
        </div>
        <div v-if="$scopedSlots.extra || $scopedSlots.card" class="sec-table-extra">
          <slot name="extra"></slot>
          <TableCardRadio
            v-if="$scopedSlots.card"
            v-model="cardType"
            class="ml10"
            :default-card-type="defaultCardType"
            @change="onTableCardRadioChange"
          ></TableCardRadio>
        </div>
      </template>
    </div>
    <div class="sec-table-main">
      <TableFilterResult
        v-if="$scopedSlots.filter && model && (!$scopedSlots.control || !selectedCount)"
        :slots="$scopedSlots.filter()"
        :model.sync="resultModel"
        @change="onFilterChange"
      ></TableFilterResult>
      <sec-row
        v-show="cardType"
        class="sec-table-row"
        v-bind="cardRowOptions"
      >
        <template v-for="(item, $index) in data">
          <slot name="card" :row="item" :$index="$index"></slot>
        </template>
      </sec-row>
      <div v-show="!cardType" class="sec-table-inner">
        <sec-popover
          v-if="value"
          trigger="hover"
          placement="bottom-start"
          class="sec-table-selection-popover"
          :disabled="!acrossSelection"
        >
          <div class="sec-table-selection-wrap">
            <p>
              <sec-checkbox
                v-if="across"
                :value="across.checkAll"
                :indeterminate="acrossIndeterminate"
                @change="selectAcross"
              >
                跨页全选
                <strong>{{ pager.total }}</strong>
                条
              </sec-checkbox>
            </p>
            <p>
              <sec-checkbox
                :value="checkState.checked"
                :indeterminate="checkState.indeterminate"
                @change="selectCurrentPage"
              >
                当页全选
                <strong>{{ data.length }}</strong>
                条
              </sec-checkbox>
            </p>
          </div>
          <template #reference>
            <div class="sec-table-selection-control">
              <sec-checkbox
                :value="checkState.checked"
                :indeterminate="checkState.indeterminate"
                @change="selectCurrentPage"
              ></sec-checkbox>
            </div>
          </template>
        </sec-popover>
        <TableMain
          ref="table"
          v-bind="$attrs"
          v-on="$listeners"
          :value="value"
          :data="data"
          :row-key="rowKey"
          :height="tableHeight"
          :tooltip-effect="tooltipEffect"
          :toggle-column-show="toggleColumnShow"
          :columns="columns"
          :cols-map="colsMap"
          @select="onSelect"
          @setCol="onSetCol"
          @checkAllCols="onCheckAllCols"
          @resetCols="onResetCols"
        >
          <slot></slot>
          <template #append><slot name="append"></slot></template>
          <template v-if="empty" #empty>
            <slot name="empty">
              <sec-empty v-bind="empty"></sec-empty>
            </slot>
          </template>
        </TableMain>
      </div>
    </div>
    <div v-if="pager" class="sec-table-pager">
      <sec-pager v-model="pagerData" v-bind="pagerOptions"></sec-pager>
    </div>
  </div>
</template>

<script>
import {
  isPlainObject,
  isArray,
  defaults,
  each,
  map,
  find,
  concat,
  remove,
  every,
  some,
  includes,
  isUndefined,
  isString,
  has,
} from 'lodash';
import TableMain from './TableMain.vue';
import TableFilter from './TableFilter.vue';
import TableFilterResult from './TableFilterResult.vue';
import TableCardRadio from './TableCardRadio.vue';

export default {
  name: 'ElTable',
  componentName: 'SecTable',
  inheritAttrs: false,
  components: {
    TableMain,
    TableFilter,
    TableFilterResult,
    TableCardRadio,
  },
  props: {
    value: {
      type: [Array, Object],
      default: null,
    },
    data: {
      type: Array,
      default: () => [],
    },
    rowKey: {
      type: [Function, String],
      default: null,
    },
    tooltipEffect: {
      type: String,
      default: 'light',
    },
    emptyOptions: {
      type: [Boolean, Object],
      default: true,
    },
    model: {
      type: Object,
      default: null,
    },
    filterMax: {
      type: Number,
      default: 3,
    },
    filterMoreOptions: {
      type: Object,
      default: null,
    },
    filterAppend: {
      type: Boolean,
      default: true,
    },
    pager: {
      type: Object,
      default: null,
    },
    pagerOptions: {
      type: Object,
      default: null,
    },
    cardRowOptions: {
      type: Object,
      default: null,
    },
    defaultCardType: {
      type: Boolean,
      default: true,
    },
    height: {
      type: [String, Number],
      default: null,
    },
    full: {
      type: Boolean,
      default: false,
    },
    toggleColumnShow: {
      type: [Boolean, String],
      default: false,
    },
  },
  data() {
    return {
      columns: [],
      colsMap: {},
      cardType: false,
    };
  },
  computed: {
    tableHeight() {
      if (this.full) {
        return '100%';
      }
      return this.height;
    },
    across: {
      get() {
        if (this.acrossSelection) {
          return defaults(this.value, {
            checkAll: false,
            selected: [],
            excluded: [],
          });
        }
        return null;
      },
      set(val) {
        if (val) {
          this.$emit('input', {
            checkAll: true,
            selected: [],
            excluded: this.excluded,
          });
        } else {
          this.$emit('input', {
            checkAll: false,
            selected: this.selected,
            excluded: [],
          });
        }
      },
    },
    acrossIndeterminate() {
      const {
        across: { checkAll, excluded },
        pagerData: { total },
      } = this;
      if (checkAll) {
        return excluded.length > 0 && excluded.length !== total;
      }
      return false;
    },
    selected: {
      get() {
        if (isArray(this.value)) {
          return this.value;
        }
        if (this.acrossSelection) {
          return this.across.selected;
        }
        return null;
      },
      set(val) {
        if (this.acrossSelection) {
          this.$emit('input', {
            checkAll: false,
            selected: val,
            excluded: [],
          });
        } else {
          this.$emit('input', val);
        }
      },
    },
    excluded: {
      get() {
        if (this.acrossSelection) {
          return this.across.excluded;
        }
        return [];
      },
      set(val) {
        if (this.acrossSelection) {
          if (val.length === this.pagerData.total) {
            this.$emit('input', {
              checkAll: false,
              selected: [],
              excluded: [],
            });
          } else {
            this.$emit('input', {
              checkAll: true,
              selected: [],
              excluded: val,
            });
          }
        }
      },
    },
    selectedCount() {
      if (this.value) {
        if (this.acrossSelection && this.across.checkAll) {
          return this.pagerData.total - this.across.excluded.length;
        }
        if (isArray(this.selected)) {
          return this.selected.length;
        }
        return 0;
      }
      return 0;
    },
    resultModel: {
      get() {
        return this.model;
      },
      set(val) {
        this.$emit('update:model', val);
      },
    },
    empty() {
      if (isPlainObject(this.emptyOptions)) {
        return defaults(this.emptyOptions, {
          image: '',
          imageSize: 0,
          description: '',
        });
      }
      if (this.emptyOptions === true) {
        return {};
      }
      return false;
    },
    pagerData: {
      get() {
        return defaults(this.pager, {
          page: 1,
          pageSize: 10,
          total: 0,
        });
      },
      set(val) {
        this.$emit('update:pager', val);
        this.$emit('pagerChange', val);
      },
    },
    acrossSelection() {
      return this.pager && isPlainObject(this.value);
    },
    checkState() {
      const all = this.data.length > 0 && every(this.data, this.includeHandler);
      const somewhat = some(this.data, this.includeHandler);
      return {
        checked: all || somewhat,
        indeterminate: somewhat && !all,
        all,
        somewhat,
      };
    },
  },
  mounted() {
    this.store = this.$refs.table.store;
    if (this.toggleColumnShow) {
      this.setCols();
    }
    if (!!this.defaultCardType && this.$scopedSlots.card) {
      this.cardType = true;
    }
  },
  watch: {
    data: {
      immediate: true,
      handler(val) {
        if (val && val.length === 0 && this.pager && this.pager.page > 1) {
          const pager = { ...this.pagerData };
          let { total } = pager;
          if (this.pagerOptions && this.pagerOptions.total) {
            total = this.pagerOptions.total;
          }
          if (total) {
            pager.page = parseInt((total - 1) / pager.pageSize, 10) + 1;
          } else {
            pager.page = 1;
          }
          pager.page -= 1;
          this.pagerData = pager;
        }
        this.$nextTick(() => {
          this.refreshSelection();
          this.doLayout();
        });
      },
    },
    value() {
      this.clearSelection();
      this.refreshSelection();
    },
    toggleColumnShow(val) {
      if (val) {
        this.setCols();
      } else {
        this.columns = [];
        this.colsMap = {};
      }
    },
    colsMap(val) {
      this.$emit('colsChange', val);
    },
  },
  methods: {
    setCols() {
      const columns = [];
      each(this.$slots.default, (VNode) => {
        if (VNode?.componentOptions?.Ctor?.options?.componentName === 'SecTableColumn' && !!VNode.componentOptions.propsData) {
          const {
            label,
            prop,
            alwaysShow,
            initialHide,
          } = VNode.componentOptions.propsData;
          if (label && prop) {
            columns.push({
              label,
              prop,
              alwaysShow: !isUndefined(alwaysShow) && alwaysShow !== false,
              initialHide: !isUndefined(initialHide) && initialHide !== false,
            });
          }
        }
      });
      this.columns = columns;
      const colsMap = {};
      each(columns, ({ prop, initialHide }) => {
        colsMap[prop] = !initialHide;
      });
      if (isString(this.toggleColumnShow)) {
        const local = localStorage.getItem(this.toggleColumnShow);
        if (local) {
          try {
            each(JSON.parse(local), (val, key) => {
              if (has(colsMap, key)) {
                colsMap[key] = val;
              }
            });
          } catch (e) {
            console.error(e);
          }
        }
      }
      this.colsMap = colsMap;
      this.saveCols();
    },
    onFilterChange() {
      this.$emit('filterChange', this.model);
    },
    onTableCardRadioChange(val) {
      this.$emit('cardTypeChange', val);
    },
    onSetCol(prop, value) {
      this.colsMap[prop] = value;
      this.saveCols();
    },
    onCheckAllCols() {
      each(this.columns, ({ prop }) => {
        this.colsMap[prop] = true;
      });
      this.saveCols();
    },
    onResetCols() {
      each(this.columns, ({ prop, initialHide }) => {
        this.colsMap[prop] = !initialHide;
      });
      this.saveCols();
    },
    saveCols() {
      if (isString(this.toggleColumnShow)) {
        localStorage.setItem(this.toggleColumnShow, JSON.stringify(this.colsMap));
      }
      this.$nextTick(() => {
        this.doLayout();
      });
    },
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
      if (this.$refs.table) {
        this.$refs.table.doLayout();
      }
    },
    sort(prop, order) {
      this.$refs.table.sort(prop, order);
    },
    refreshSelection() {
      if (isArray(this.value)) {
        if (this.value && this.value.length) {
          each(this.value, (value) => {
            const finded = find(this.data, [this.rowKey, value]);
            if (finded) {
              this.toggleRowSelection(finded, true);
            }
          });
        }
      } else if (this.acrossSelection) {
        const { checkAll, selected, excluded } = this.across;
        each(this.data, (o) => {
          if (
            (checkAll && !includes(excluded, o[this.rowKey]))
            || (!checkAll && includes(selected, o[this.rowKey]))
          ) {
            this.toggleRowSelection(o, true);
          }
        });
      }
    },
    onSelect(selection, row) {
      if (this.value) {
        const { rowKey } = this;
        const finded = find(selection, [rowKey, row[rowKey]]);
        if (finded) {
          if (this.acrossSelection && this.across.checkAll) {
            const oldExcluded = [...this.excluded];
            remove(oldExcluded, (o) => o === row[rowKey]);
            this.excluded = oldExcluded;
          } else {
            this.selected = concat(this.selected, row[rowKey]);
          }
        } else if (this.acrossSelection && this.across.checkAll) {
          this.excluded = concat(this.excluded, row[rowKey]);
        } else {
          const oldSelected = [...this.selected];
          remove(oldSelected, (o) => o === row[rowKey]);
          this.selected = oldSelected;
        }
      }
    },
    includeHandler(o) {
      if (this.acrossSelection && this.across.checkAll) {
        return !includes(this.excluded, o[this.rowKey]);
      }
      return includes(this.selected, o[this.rowKey]);
    },
    selectCurrentPage() {
      const { rowKey } = this;
      if (this.checkState.checked) {
        if (this.checkState.all) {
          if (this.acrossSelection && this.across.checkAll) {
            this.excluded = concat(this.excluded, map(this.data, rowKey));
          } else {
            const oldSelected = [...this.selected];
            remove(oldSelected, (o) => !!find(this.data, [rowKey, o]));
            this.selected = oldSelected;
          }
        } else if (this.acrossSelection && this.across.checkAll) {
          const oldExcluded = [...this.excluded];
          remove(oldExcluded, (o) => !!find(this.data, [rowKey, o]));
          this.excluded = oldExcluded;
        } else {
          const toAdd = [];
          each(this.data, (o) => {
            if (!includes(this.selected, o[rowKey])) {
              toAdd.push(o[rowKey]);
            }
          });
          this.selected = concat(this.selected, toAdd);
        }
      } else if (this.acrossSelection && this.across.checkAll) {
        const oldExcluded = [...this.excluded];
        remove(oldExcluded, (o) => !!find(this.data, [rowKey, o]));
        this.excluded = oldExcluded;
      } else {
        this.selected = concat(this.selected, map(this.data, rowKey));
      }
    },
    selectAcross() {
      if (this.across.checkAll) {
        if (this.acrossIndeterminate) {
          this.excluded = [];
        } else {
          this.across = false;
        }
      } else {
        this.across = true;
      }
    },
  },
};
</script>
