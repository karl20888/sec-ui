<template>
  <div class="demo-image__error">
    <div class="block">
      <span class="demonstration">默认</span>
      <sec-image></sec-image>
    </div>
    <div class="block">
      <span class="demonstration">自定义</span>
      <sec-image>
        <template #error>
          <div class="image-slot">
            <i class="el-icon-picture-outline"></i>
          </div>
        </template>
      </sec-image>
    </div>
  </div>
</template>

<style lang="less" scoped>
.block {
  display: inline-block;
  width: 50%;
  padding: 30px 0;
  border-right: 1px solid #eff2f6;
  text-align: center;
  vertical-align: top;

  &:last-child {
    border-right: none;
  }
}

.demonstration {
  display: block;
  margin-bottom: 20px;
  font-size: 14px;
  color: #8492a6;
}

.sec-image {
  width: 300px;
  height: 200px;
}

:deep(.image-slot) {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #f5f7fa;
  color: #909399;
  font-size: 30px;
}
</style>
