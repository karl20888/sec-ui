<template>
  <div>
    <el-steps finish-status="success" :active="active">
      <el-step title="步骤 1"></el-step>
      <el-step title="步骤 2"></el-step>
      <el-step title="步骤 3"></el-step>
    </el-steps>
    <sec-btn class="mt10" @click="next">下一步</sec-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
  methods: {
    next() {
      this.active += 1;
      if (this.active > 3) {
        this.active = 0;
      }
    },
  },
};
</script>
