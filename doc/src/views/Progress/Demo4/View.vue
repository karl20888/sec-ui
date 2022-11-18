<template>
  <div>
    <sec-progress type="circle" :percentage="0"></sec-progress>
    <sec-progress type="circle" :percentage="25"></sec-progress>
    <sec-progress type="circle" status="success" :percentage="100"></sec-progress>
    <sec-progress type="circle" status="warning" :percentage="70"></sec-progress>
    <sec-progress type="circle" status="exception" :percentage="50"></sec-progress>
  </div>
</template>

<style lang="less" scoped>
.sec-progress {
  margin-right: 15px;
}
</style>
