<template>
  <div>
    <sec-radio-group v-model="size">
      <sec-radio label="large">大型</sec-radio>
      <sec-radio label="medium">中等</sec-radio>
      <sec-radio label="">默认</sec-radio>
      <sec-radio label="mini">超小</sec-radio>
    </sec-radio-group>
    <el-descriptions border title="带边框列表" class="mt20" :size="size">
      <template #extra>
        <sec-btn type="primary">操作</sec-btn>
      </template>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-user"></i>
          用户名
        </template>
        kooriookami
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-location-outline"></i>
          居住地
        </template>
        苏州市
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-tickets"></i>
          备注
        </template>
        <sec-tag>学校</sec-tag>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-office-building"></i>
          联系地址
        </template>
        江苏省苏州市吴中区吴中大道 1188 号
      </el-descriptions-item>
    </el-descriptions>
    <el-descriptions title="无边框列表" class="mt20" :size="size">
      <template #extra>
        <sec-btn type="primary">操作</sec-btn>
      </template>
      <el-descriptions-item label="用户名">kooriookami</el-descriptions-item>
      <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
      <el-descriptions-item label="居住地">苏州市</el-descriptions-item>
      <el-descriptions-item label="备注">
        <sec-tag>学校</sec-tag>
      </el-descriptions-item>
      <el-descriptions-item label="联系地址">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script>
export default {
  data() {
    return {
      size: '',
    };
  },
};
</script>
