```vue
<template>
  <sec-upload
    action="https://jsonplaceholder.typicode.com/posts/"
    drag
    multiple
  >
    <i class="el-icon-upload"></i>
    <div class="el-upload__text">将文件拖拽到此处，或<em>点击上传</em></div>
    <template #tip>
      <div class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </template>
  </sec-upload>
</template>
```