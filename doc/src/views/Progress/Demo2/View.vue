<template>
  <div>
    <sec-progress text-inside :stroke-width="26" :percentage="70"></sec-progress>
    <sec-progress text-inside :stroke-width="24" :percentage="100" status="success"></sec-progress>
    <sec-progress text-inside :stroke-width="22" :percentage="80" status="warning"></sec-progress>
    <sec-progress text-inside :stroke-width="20" :percentage="50" status="exception"></sec-progress>
  </div>
</template>

<style lang="less" scoped>
.sec-progress {
  width: 350px;
  margin-bottom: 15px;
}
</style>
