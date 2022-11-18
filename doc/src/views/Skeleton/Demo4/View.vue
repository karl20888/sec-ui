<template>
  <sec-skeleton style="width: 240px;">
    <template #template>
      <sec-skeleton-item variant="image" style="width: 240px; height: 240px;"></sec-skeleton-item>
      <div style="padding: 14px;">
        <sec-skeleton-item variant="p" style="width: 50%;"></sec-skeleton-item>
        <div style="display: flex; align-items: center; justify-items: space-between;">
          <sec-skeleton-item variant="text" style="margin-right: 16px;"></sec-skeleton-item>
          <sec-skeleton-item variant="text" style="width: 30%;"></sec-skeleton-item>
        </div>
      </div>
    </template>
  </sec-skeleton>
</template>
