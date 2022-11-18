<template>
  <div v-if="tags.length" class="sec-table-filter-result">
    <i class="el-icon-warning"></i>
    <Tag
      v-for="item in tags"
      :key="item.prop"
      @close="clear(item.prop)"
    >
      {{ item.label }}：{{ item.value }}
    </Tag>
    <sec-btn type="text" @click="clearAll">清除</sec-btn>
  </div>
</template>

<script>
import {
  each,
  find,
  isEqual,
  has,
} from 'lodash';
import Tag from './Tag.vue';

export default {
  components: {
    Tag,
  },
  props: {
    slots: {
      type: Array,
      default: () => [],
    },
    model: {
      type: Object,
      default: null,
    },
  },
  computed: {
    tags() {
      const tags = [];
      each(this.slots, ({ data: { attrs } }) => {
        if (attrs) {
          const {
            label,
            prop,
            'default-value': defaultValue = '',
            'result-value-map': resultValueMap,
            'result-value-format': resultValueFormat,
          } = attrs;
          if (prop && !isEqual(defaultValue, this.model[prop])) {
            let value = this.model[prop];
            if (resultValueMap) {
              value = resultValueMap[this.model[prop]];
            }
            if (resultValueFormat) {
              value = resultValueFormat(this.model[prop]);
            }
            tags.push({
              label,
              prop,
              value,
            });
          }
        }
      });
      return tags;
    },
  },
  methods: {
    getDefaultValue(prop) {
      let value = '';
      const finded = find(this.slots, (VNode) => VNode?.data?.attrs?.prop === prop);
      if (finded) {
        const { attrs } = finded.data;
        if (has(attrs, 'default-value') && attrs['default-value'] !== '') {
          value = attrs['default-value'];
        }
      }
      return value;
    },
    clear(prop) {
      const model = { ...this.model };
      model[prop] = this.getDefaultValue(prop);
      this.$emit('update:model', model);
      this.$emit('change');
    },
    clearAll() {
      const model = { ...this.model };
      each(this.model, (oldValue, prop) => {
        model[prop] = this.getDefaultValue(prop);
      });
      this.$emit('update:model', model);
      this.$emit('change');
    },
  },
};
</script>
