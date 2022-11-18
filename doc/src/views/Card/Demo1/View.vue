<template>
  <sec-card header="卡片名称">
    <template #extra>
      <sec-btn type="text">操作按钮</sec-btn>
    </template>
    <div v-for="o in 4" :key="o">
      列表内容 {{ o }}
    </div>
  </sec-card>
</template>
