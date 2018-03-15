<template>
    <el-form>
        <el-form-item label="Username">
            <el-input v-model="User.username"></el-input>
        </el-form-item>
        <el-form-item label="Password">
            <el-input type="password" v-model="User.password"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onLogin">Login</el-button>
            <a href="signup" class="btn btn-link">Register</a>
        </el-form-item>
    </el-form>
</template>

<script>
import axios from '../my-axios';
export default {
  data() {
    return {
      User: {
        username: '',
        password: ''
      }
    };
  },
  methods: {
    onLogin() {
      axios.post('/auth/login', this.User)
       .then(function(response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
};
</script>
