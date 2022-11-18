<template>
  <span
    class="ais-port"
    :class="{
      'connected': getPort().connected,
    }"
  ></span>
</template>

<script>
export default {
  methods: {
    getPort() {
      return this.$vnode.data;
    },
  },
};
</script>
