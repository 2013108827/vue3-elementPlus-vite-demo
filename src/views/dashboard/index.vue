<template>
  <div class="dashboard">
    <el-row :gutter="20">
      <el-col :span="6">这</el-col>
      <el-col :span="6">是</el-col>
      <el-col :span="6">主</el-col>
      <el-col :span="6">页</el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  name: "dashboard-index",
  data() {
    return {
      infoList: [],
      averageWidth: "100%",
    };
  },
  methods: {
    init() {

    }
  },
  mounted() {
    this.init()
  }
};
</script>

<style scoped>

.dashboard {
  height: 100%;
  width: 100%;
  background: url("/src/assets/images/background.png") no-repeat fixed;
}

.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  color: white;
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
