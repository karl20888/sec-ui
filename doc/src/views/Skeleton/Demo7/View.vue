<template>
  <div style="width: 240px;">
    <p class="mb15">
      <span style="margin-right: 16px;">切换 Loading</span>
      <sec-switch v-model="loading"></sec-switch>
    </p>
    <sec-skeleton
      animated
      style="width: 240px;"
      :loading="loading"
      :throttle="500"
    >
      <template #template>
        <sec-skeleton-item variant="image" style="width: 240px; height: 240px;"></sec-skeleton-item>
        <div style="padding: 14px;">
          <sec-skeleton-item variant="h3" style="width: 50%;"></sec-skeleton-item>
          <div
            style="
              display: flex;
              align-items: center;
              justify-items: space-between;
              margin-top: 16px;
              height: 16px;
            "
          >
            <sec-skeleton-item variant="text" style="margin-right: 16px;"></sec-skeleton-item>
            <sec-skeleton-item variant="text" style="width: 30%;"></sec-skeleton-item>
          </div>
        </div>
      </template>
      <sec-card
        :body-style="{
          'padding': '0',
          'margin-bottom': '1px',
        }"
      >
        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" alt="image">
        <div style="padding: 14px;">
          <span>好吃的汉堡</span>
          <div class="card-header">
            <span class="time">{{ currentDate }}</span>
            <sec-btn type="text" class="button">操作按钮</sec-btn>
          </div>
        </div>
      </sec-card>
    </sec-skeleton>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      currentDate: '2021-06-01',
    };
  },
};
</script>

<style lang="less" scoped>
.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  line-height: 12px;
}

.time {
  font-size: 12px;
  color: #999;
}

.button {
  padding: 0;
  min-height: auto;
}
</style>
