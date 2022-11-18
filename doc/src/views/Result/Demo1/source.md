```vue
<template>
  <sec-row>
    <sec-col :sm="12" :lg="6">
      <sec-result icon="success" title="成功提示" subTitle="请根据提示进行操作">
        <template #extra>
          <sec-btn type="primary" size="medium">返回</sec-btn>
        </template>
      </sec-result>
    </sec-col>
    <sec-col :sm="12" :lg="6">
      <sec-result icon="warning" title="警告提示" subTitle="请根据提示进行操作">
        <template #extra>
          <sec-btn type="primary" size="medium">返回</sec-btn>
        </template>
      </sec-result>
    </sec-col>
    <sec-col :sm="12" :lg="6">
      <sec-result icon="error" title="错误提示" subTitle="请根据提示进行操作">
        <template #extra>
          <sec-btn type="primary" size="medium">返回</sec-btn>
        </template>
      </sec-result>
    </sec-col>
    <sec-col :sm="12" :lg="6">
      <sec-result icon="info" title="信息提示" subTitle="请根据提示进行操作">
        <template #extra>
          <sec-btn type="primary" size="medium">返回</sec-btn>
        </template>
      </sec-result>
    </sec-col>
  </sec-row>
</template>
```