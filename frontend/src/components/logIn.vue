<template>
    <el-form>
        <el-form-item label="Username">
            <el-input v-model="User.username"></el-input>
        </el-form-item>
        <el-form-item label="Password">
            <el-input type="password" v-model="User.password"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onLogin()">Login</el-button>
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
        authenticated: false, 
        username: '',
        password: '',
        ownname: '',
        surname: '',
        gender: '1',
        email: '',
        age: '',
        _id: ''
      }
    };
  },
  methods: {
    onLogin() {
      console.log(this.User);
      axios.post('/auth/login', this.User)
        .then((response) => {
          console.log(response.data);
          localStorage.setItem('jwtToken', response.data.token);
          this.User.authenticated = true;
          window.location.href = '/profilepage';
          console.log(response.data);
      })
      .catch(function (error) {
        console.log(error),
        alert('User is not found')
      });
      
    }
  }
};
</script>
                    
    
