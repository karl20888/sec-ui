<template>
  <sec-rate
    v-model="value"
    void-icon-class="icon-rate-face-off"
    :icon-classes="iconClasses"
    :colors="['#99a9bf', '#f7ba2a', '#ff9900']"
  ></sec-rate>
</template>

<script>
export default {
  data() {
    return {
      value: null,
      iconClasses: ['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3'],
    };
  },
};
</script>
