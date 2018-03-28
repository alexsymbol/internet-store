<template>
  <el-row :gutter="20">
    <el-col :span="12" :offset="6">
        <div class="grid-content bg-purple-light">
            <h2>Sign up</h2>
            <sign-up></sign-up>
        </div>
    </el-col>
  </el-row>
</template>

<script>
import SignUp from '../components/signUp';
export default {
  components: {
    SignUp,
  }
};
</script>

<style>
  .grid-content {
    border-radius: 4px;
    padding: 10px 20px;
  }
</style>
