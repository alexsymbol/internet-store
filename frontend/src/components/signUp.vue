<template>
    <el-form>
        <el-form-item label="Username">
            <el-input v-model="User.username"></el-input>
        </el-form-item>
        <el-form-item label="Email">
            <el-input v-model="User.email"></el-input>
        </el-form-item>
        <el-form-item label="Password">
            <el-input type="password" v-model="User.password"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSignup">Sign up</el-button>
            <a href="/login" class="btn btn-link">Login</a>
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
        email: '',
        password: ''
      }    
    };
  },
  methods: {
    onSignup() {
      axios.post('/auth/', this.User)
        .then(function(response) {
          console.log(response);
          localStorage.setItem('jwtToken', response.data.token);
          localStorage.setItem('user_id', response.data._id);
          this.$router.push('/profile');
        })
        .catch(function(error) {
          console.log(error),
          alert('Please use a unique username')
        });
    }
  }  
};
</script>
