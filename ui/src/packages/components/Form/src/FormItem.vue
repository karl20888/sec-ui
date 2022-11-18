<template>
  <FormItem
    ref="formItem"
    class="sec-form-item"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <div :class="{ 'sec-form-item-wrap': extraSize }">
      <div class="sec-form-item-content">
        <slot></slot>
      </div>
      <div
        class="sec-form-item-extra"
        :class="{
          'sec-form-item-align': extraAlignValue,
        }"
        :style="{
          'width': extraSize || null,
          'text-align': extraAlignValue || null,
        }"
      >
        <slot name="extra"></slot>
      </div>
    </div>
    <template #label><slot name="label"></slot></template>
    <template #error="{ error }">
      <slot name="error" :error="error"></slot>
    </template>
  </FormItem>
</template>

<script>
import emitter from 'element-ui/src/mixins/emitter';
import { FormItem } from 'element-ui';
import { isNumber, isString, debounce } from 'lodash';

export default {
  name: 'ElFormItem',
  componentName: 'SecFormItem',
  inheritAttrs: false,
  components: {
    FormItem,
  },
  mixins: [emitter],
  props: {
    extraWidth: {
      type: [String, Number],
      default: 0,
    },
    extraAlign: {
      type: String,
      default: '',
    },
    debounce: {
      type: Number,
      default: 300,
    },
  },
  computed: {
    extraSize() {
      let w = 0;
      if (this?.$options?.propsData?.extraWidth) {
        w = this.$options.propsData.extraWidth;
      } else if (this?.$parent?.$parent?.$options?.propsData?.extraWidth) {
        w = this.$parent.$parent.$options.propsData.extraWidth;
      }
      if (w) {
        if (isNumber(w)) {
          return `${w}px`;
        }
        if (isString(w)) {
          return w;
        }
        return 0;
      }
      return 0;
    },
    extraAlignValue() {
      let align = '';
      if (this?.$options?.propsData?.extraAlign) {
        align = this.$options.propsData.extraAlign;
      } else if (this?.$parent?.$parent?.$options?.propsData?.extraAlign) {
        align = this.$parent.$parent.$options.propsData.extraAlign;
      }
      return align;
    },
  },
  mounted() {
    if (this.$parent.$el.hasAttribute('is-table-filter-form')) {
      this.$refs.formItem.$on('el.form.change', debounce(() => {
        this.dispatch('SecTableFilter', 'sec.table.filter.change');
      }, this.debounce));
    }
  },
  methods: {
    resetField() {
      this.$refs.formItem.resetField();
    },
    clearValidate() {
      this.$refs.formItem.clearValidate();
    },
  },
};
</script>
