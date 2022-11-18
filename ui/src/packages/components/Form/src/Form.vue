<template>
  <Form
    ref="form"
    class="sec-form"
    v-bind="$attrs"
    v-on="$listeners"
    :is-table-filter-form="isTableFilterForm"
  >
    <slot :extra-width="extraWidth"></slot>
  </Form>
</template>

<script>
import { Form } from 'element-ui';

export default {
  name: 'ElForm',
  componentName: 'SecForm',
  inheritAttrs: false,
  components: {
    Form,
  },
  props: {
    extraWidth: {
      type: [String, Number],
      default: 0,
    },
    extraAlign: {
      type: String,
      default: '',
    },
    isTableFilterForm: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    validate() {
      return new Promise((resolve, reject) => {
        this.$refs.form.validate((valid, err) => {
          if (valid) {
            resolve();
          } else {
            reject(err);
          }
        });
      });
    },
    validateField(props, callback) {
      this.$refs.form.validateField(props, callback);
    },
    resetFields() {
      this.$refs.form.resetFields();
    },
    clearValidate(props) {
      this.$refs.form.clearValidate(props);
    },
  },
};
</script>
