<template>
  <PageHeader class="sec-page-header" v-bind="$attrs" v-on="$listeners">
    <template #title><slot name="title"></slot></template>
    <template #content><slot name="content"></slot></template>
  </PageHeader>
</template>

<script>
import { PageHeader } from 'element-ui';

export default {
  name: 'ElPageHeader',
  componentName: 'SecPageHeader',
  inheritAttrs: false,
  components: {
    PageHeader,
  },
};
</script>
