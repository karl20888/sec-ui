<template>
  <div>
    <sec-switch v-model="value"></sec-switch>
    <sec-pager
      :hide-on-single-page="value"
      :total="5"
    ></sec-pager>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: false,
    };
  },
};
</script>
