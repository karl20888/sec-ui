<template>
  <Calendar class="sec-calendar" v-bind="$attrs" v-on="$listeners">
    <template v-if="$scopedSlots.dateCell" #dateCell="{ date, data }">
      <slot name="dateCell" :date="date" :data="data"></slot>
    </template>
  </Calendar>
</template>

<script>
import { Calendar } from 'element-ui';

export default {
  name: 'ElCalendar',
  componentName: 'SecCalendar',
  inheritAttrs: false,
  components: {
    Calendar,
  },
};
</script>
