<template>
  <svg
    v-if="color"
    class="sec-svg-icon"
    aria-hidden="true"
    v-on="$listeners"
  >
    <use :xlink:href="`#icon-${name}`"></use>
  </svg>
  <i
    v-else
    class="sec-icon"
    :class="`icon-${name}`"
    v-on="$listeners"
  ></i>
</template>

<script>
export default {
  name: 'SecIcon',
  componentName: 'SecIcon',
  props: {
    name: {
      type: String,
      default: '',
    },
    color: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
