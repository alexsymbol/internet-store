<template>
  <el-row :gutter="20">
    <el-col :span="6" :offset="9">
        <div class="grid-content bg-purple-light">
            <h2>Sign up</h2>
            <Signup></Signup>
        </div>
    </el-col>
  </el-row>
</template>

<script>
import Signup from '../components/Signup.vue';
export default {
  components: {
    'Signup': Signup
  }
};
</script>

<style>
  .grid-content {
    border-radius: 4px;
    padding: 10px 20px;
  }
</style>
