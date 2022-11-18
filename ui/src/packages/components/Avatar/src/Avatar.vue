<template>
  <Avatar class="sec-avatar" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </Avatar>
</template>

<script>
import { Avatar } from 'element-ui';

export default {
  name: 'ElAvatar',
  componentName: 'SecAvatar',
  inheritAttrs: false,
  components: {
    Avatar,
  },
};
</script>
