<template>
  <sec-input-number
    v-model="num"
    controls-position="right"
    :min="1"
    :max="10"
    @change="handleChange"
  ></sec-input-number>
</template>

<script>
export default {
  data() {
    return {
      num: 1,
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
  },
};
</script>
