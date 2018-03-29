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
            <a href="/signup" class="btn btn-link">Sign up</a>
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
        email: '',
        age: '',
        _id: ''
      }
    };
  },
  methods: {
    onLogin() {
      axios.post('/auth/login', this.User)
        .then((response) => {
          localStorage.setItem('user_id', response.data._id);
          this.User.authenticated = true;
          window.location.href = '/profile'
        })
        .catch(function (error) {
          console.log(error),
          alert('User is not found')
        });
    }
  }
};
</script>
                    
    
