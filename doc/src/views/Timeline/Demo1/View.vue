<template>
  <div>
    <div class="mb20">
      排序：
      <sec-radio-group v-model="reverse">
        <sec-radio :label="true">倒序</sec-radio>
        <sec-radio :label="false">正序</sec-radio>
      </sec-radio-group>
    </div>
    <sec-timeline :reverse="reverse">
      <sec-timeline-item
        v-for="activity in activities"
        :key="activity.id"
        :timestamp="activity.timestamp"
      >{{ activity.content }}</sec-timeline-item>
    </sec-timeline>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reverse: true,
      activities: [{
        id: '1',
        content: '活动按期开始',
        timestamp: '2018-04-15',
      }, {
        id: '2',
        content: '通过审核',
        timestamp: '2018-04-13',
      }, {
        id: '3',
        content: '创建成功',
        timestamp: '2018-04-11',
      }],
    };
  },
};
</script>
