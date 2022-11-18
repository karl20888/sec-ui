<template>
  <div class="sec-where-group">
    <div class="sec-where-group-header">
      <slot name="header" :data="whereData" :level="level" :index="index">
        <sec-radio-group v-model="whereData.group">
          <sec-radio-button label="AND">AND</sec-radio-button>
          <sec-radio-button label="OR">OR</sec-radio-button>
        </sec-radio-group>
        <div class="sec-where-group-control">
          <sec-btn
            v-if="level < maxLevel - 1"
            type="text"
            @click="addGroup"
          >添加</sec-btn>
          <sec-btn
            v-if="index"
            type="text"
            @click="removeGroup"
          >删除</sec-btn>
        </div>
      </slot>
    </div>
    <div
      class="sec-where-group-content"
      :class="{
        'is-empty': !showTail && (!value[childrenKey] || !value[childrenKey].length)
      }"
    >
      <div
        v-for="(item, index) in value[childrenKey]"
        :key="item._key"
        class="sec-where-group-item"
        :class="{ 'is-group': item.group }"
      >
        <sec-where-group
          v-if="item.group"
          :value="item"
          :index="`${pIndex}${index}`"
          :level="level + 1"
          :props="props"
          :max-level="maxLevel"
          :children-key="childrenKey"
          :justify-content="justifyContent"
          group
          @remove="remove(index)"
        >
          <template #default="{ row, index }">
            <slot :row="row" :index="index"></slot>
          </template>
          <template #control="{ row, index, level }">
            <slot name="control" :row="row" :index="index" :level="level"></slot>
          </template>
        </sec-where-group>
        <WhereItem
          v-else
          ref="whereItem"
          :value="item"
          :index="`${pIndex}${index}`"
          :level="level + 1"
          :justify-content="justifyContent"
          group
          @add="add(index)"
          @copy="add(index, item)"
          @remove="remove(index)"
        >
          <template #default="{ row }">
            <slot :row="row" :index="`${pIndex}${index}`"></slot>
          </template>
          <template #control>
            <slot
              name="control"
              :row="item"
              :index="`${pIndex}${index}`"
              :level="level"
            ></slot>
          </template>
        </WhereItem>
      </div>
      <div v-if="level === 0 && showTail" class="sec-where-group-item">
        <slot name="tail">
          <div class="sec-where-group-tail">
            <sec-btn
              type="primary"
              size="mini"
              plain
              @click="add()"
            >添加条件</sec-btn>
            <sec-btn
              type="primary"
              size="mini"
              plain
              @click="addGroup"
            >添加组</sec-btn>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import { now, isUndefined } from 'lodash';
import WhereItem from './WhereItem.vue';

export default {
  name: 'SecWhereGroup',
  componentName: 'SecWhereGroup',
  components: {
    WhereItem,
  },
  props: {
    value: {
      type: Object,
      default: () => ({
        group: 'AND',
        [this.childrenKey]: [],
      }),
    },
    props: {
      type: Object,
      default: () => ({}),
    },
    childrenKey: {
      type: String,
      default: 'children',
    },
    group: {
      type: Boolean,
      default: false,
    },
    index: {
      type: String,
      default: '',
    },
    groupProps: {
      Object,
      default() {
        return {
          group: 'AND',
          [this.childrenKey]: [{
            ...this.props,
          }],
        };
      },
    },
    level: {
      type: Number,
      default: 0,
    },
    maxLevel: {
      type: Number,
      default: 3,
    },
    justifyContent: {
      type: String,
      default: 'space-between',
    },
    showTail: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    whereData: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      },
    },
    pIndex() {
      return this.index ? `${this.index}-` : '';
    },
  },
  methods: {
    add(index, data = { ...this.props }) {
      const value = {
        ...this.whereData,
      };
      if (!value[this.childrenKey]) {
        value[this.childrenKey] = [];
      }
      const item = {
        ...data,
        _key: now(),
      };
      value[this.childrenKey].splice(
        isUndefined(index) ? value[this.childrenKey].length : index + 1,
        0,
        item,
      );
      this.whereData = value;
    },
    remove(index) {
      const value = {
        ...this.whereData,
      };
      if (this.level !== 0 && value[this.childrenKey].length === 1) {
        this.removeGroup();
      } else {
        value[this.childrenKey].splice(index, 1);
      }
      this.whereData = value;
    },
    addGroup() {
      const value = {
        ...this.whereData,
      };
      if (!value[this.childrenKey]) {
        value[this.childrenKey] = [];
      }
      const item = {
        group: 'AND',
        _key: now(),
        [this.childrenKey]: [{
          _key: now(),
          ...this.props,
        }],
      };
      value[this.childrenKey].push(item);
      this.whereData = value;
    },
    removeGroup() {
      this.$emit('remove');
    },
    // validate() {
    //   each(this.$refs.whereItem, (whereItem) => {
    //     whereItem.validate();
    //   });
    // },
  },
};
</script>
