<template>
  <el-row :gutter="20">
    <el-col :span="6" :offset="9">
        <div class="grid-content bg-purple-light">
            <h2>Login</h2>
            <logIn></logIn>
        </div>
    </el-col>
  </el-row>
</template>
<script>
import logIn from '../components/logIn.vue';
export default {
  components: {
    'logIn': logIn
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
