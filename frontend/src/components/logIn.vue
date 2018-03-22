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
 console.log('axios.storage');
 console.log(axios.token);
 
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
       .then((response) => {
        console.log(response.data.token);
      localStorage.setItem('jwtToken', response.data.token);
        //this.$router.push('/profilepage');
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
};
</script>
