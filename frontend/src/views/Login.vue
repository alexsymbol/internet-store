<template>
  <el-row :gutter="20">
    <el-col :span="12" :offset="6">
        <div class="grid-content bg-purple-light">
            <h2>Login</h2>
            <logs-in></logs-in>
        </div>
    </el-col>
  </el-row>
</template>

<script>
import LogIn from '../components/logsIn';
export default {
  components: {
    LogIn,
  }
};
</script>

<style>
.bg-purple-light {
  background: #ebeef5;
}
.grid-content {
  border-radius: 4px;
  padding: 10px 20px;
}
</style>
