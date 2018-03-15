<template>
  <el-row :gutter="20">
    <el-col :span="6" :offset="9">
        <div class="grid-content bg-purple-light">
            <h2>Sign up</h2>
            <signUp></signUp>
        </div>
    </el-col>
  </el-row>
</template>

<script>
import signUp from '../components/signUp.vue';
export default {
  components: {
    'signUp': signUp
  }
};
</script>

<style>
  .grid-content {
    border-radius: 4px;
    padding: 10px 20px;
  }
</style>
