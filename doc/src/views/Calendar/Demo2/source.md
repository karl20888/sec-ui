```vue
<template>
  <sec-calendar>
    <template #dateCell="{ date, data }">
      <p :class="data.isSelected ? 'is-selected' : ''">
        {{ date | dateFormat('%M-%D') }}
        <template v-if="data.isSelected">✔️</template>
      </p>
    </template>
  </sec-calendar>
</template>

<style lang="less" scoped>
.is-selected {
  color: #1989FA;
}
</style>
```