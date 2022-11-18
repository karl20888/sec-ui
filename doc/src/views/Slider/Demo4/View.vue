<template>
  <sec-slider
    v-model="value"
    range
    show-stops
    :max="10"
  ></sec-slider>
</template>

<script>
export default {
  data() {
    return {
      value: [4, 8],
    };
  },
};
</script>
