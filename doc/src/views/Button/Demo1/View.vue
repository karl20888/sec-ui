<template>
  <div>
    <sec-row>
      <sec-btn>默认按钮</sec-btn>
      <sec-btn type="primary">主要按钮</sec-btn>
      <sec-btn type="success">成功按钮</sec-btn>
      <sec-btn type="info">信息按钮</sec-btn>
      <sec-btn type="warning">警告按钮</sec-btn>
      <sec-btn type="danger">危险按钮</sec-btn>
    </sec-row>

    <sec-row>
      <sec-btn plain>朴素按钮</sec-btn>
      <sec-btn type="primary" plain>主要按钮</sec-btn>
      <sec-btn type="success" plain>成功按钮</sec-btn>
      <sec-btn type="info" plain>信息按钮</sec-btn>
      <sec-btn type="warning" plain>警告按钮</sec-btn>
      <sec-btn type="danger" plain>危险按钮</sec-btn>
    </sec-row>

    <sec-row>
      <sec-btn round>圆角按钮</sec-btn>
      <sec-btn type="primary" round>主要按钮</sec-btn>
      <sec-btn type="success" round>成功按钮</sec-btn>
      <sec-btn type="info" round>信息按钮</sec-btn>
      <sec-btn type="warning" round>警告按钮</sec-btn>
      <sec-btn type="danger" round>危险按钮</sec-btn>
    </sec-row>

    <sec-row>
      <sec-btn icon="el-icon-search" circle></sec-btn>
      <sec-btn type="primary" icon="el-icon-edit" circle></sec-btn>
      <sec-btn type="success" icon="el-icon-check" circle></sec-btn>
      <sec-btn type="info" icon="el-icon-message" circle></sec-btn>
      <sec-btn type="warning" icon="el-icon-star-off" circle></sec-btn>
      <sec-btn type="danger" icon="el-icon-delete" circle></sec-btn>
    </sec-row>
  </div>
</template>

<style lang="less" scoped>
.sec-row {
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
}
</style>
