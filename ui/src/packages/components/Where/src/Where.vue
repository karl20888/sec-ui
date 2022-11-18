<template>
  <div class="sec-where">
    <div class="sec-where-list">
      <WhereItem
        v-for="(item, index) in whereData"
        :key="item._key"
        @add="add(index)"
        @copy="add(index, item)"
        @remove="remove(index)"
      >
        <slot :row="item" :index="index"></slot>
      </WhereItem>
    </div>
    <div class="sec-where-add">
      <slot name="add">
        <sec-btn type="primary" plain @click="add()">{{ btnText }}</sec-btn>
      </slot>
    </div>
  </div>
</template>

<script>
import emitter from 'element-ui/src/mixins/emitter';
import {
  now,
  isUndefined,
} from 'lodash';
import WhereItem from './WhereItem.vue';

export default {
  name: 'SecWhere',
  componentName: 'SecWhere',
  components: {
    WhereItem,
  },
  mixins: [emitter],
  props: {
    value: {
      type: Array,
      default: () => [],
    },
    props: {
      type: Object,
      default: () => ({}),
    },
    btnText: {
      type: String,
      default: '添加条件',
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
  },
  watch: {
    whereData: {
      deep: true,
      handler(val) {
        this.dispatch('ElFormItem', 'el.form.change', [val]);
      },
    },
  },
  methods: {
    add(index, data = { ...this.props }) {
      const value = [
        ...this.whereData,
      ];
      const item = {
        ...data,
        _key: now(),
      };
      value.splice(
        isUndefined(index) ? value.length : index + 1,
        0,
        item,
      );
      this.whereData = value;
    },
    remove(index) {
      const value = [
        ...this.whereData,
      ];
      value.splice(index, 1);
      this.whereData = value;
    },
  },
};
</script>
