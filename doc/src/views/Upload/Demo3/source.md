```vue
<template>
  <div>
    <sec-upload
      action="https://jsonplaceholder.typicode.com/posts/"
      list-type="picture-card"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
    ><i class="el-icon-plus"></i></sec-upload>
    <sec-dialog ref="dialog">
      <img :src="dialogImageUrl" alt="" width="100%">
    </sec-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogImageUrl: '',
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.$refs.dialog.open();
    },
  },
};
</script>
```