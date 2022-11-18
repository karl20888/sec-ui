<template>
  <div>
    <sec-tag>标签一</sec-tag>
    <sec-tag type="success">标签二</sec-tag>
    <sec-tag type="info">标签三</sec-tag>
    <sec-tag type="warning">标签四</sec-tag>
    <sec-tag type="danger">标签五</sec-tag>
  </div>
</template>

<style lang="less" scoped>
.sec-tag + .sec-tag {
  margin-left: 10px;
}
</style>
