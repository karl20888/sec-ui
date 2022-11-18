<template>
  <sec-upload
    action="https://jsonplaceholder.typicode.com/posts/"
    list-type="picture"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :file-list="fileList"
  >
    <sec-btn type="primary">点击上传</sec-btn>
    <template #tip>
      <div class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </template>
  </sec-upload>
</template>

<script>
export default {
  data() {
    return {
      fileList: [{
        name: 'food.jpeg',
        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
      }, {
        name: 'food2.jpeg',
        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
      }],
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
  },
};
</script>
