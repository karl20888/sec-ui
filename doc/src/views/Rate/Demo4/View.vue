<template>
  <sec-rate
    v-model="value"
    text-color="#ff9900"
    score-template="{ value }"
    disabled
    show-score
  ></sec-rate>
</template>

<script>
export default {
  data() {
    return {
      value: 3.7,
    };
  },
};
</script>
