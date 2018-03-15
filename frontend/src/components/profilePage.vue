<template>
    <el-form :label-position="labelPosition" label-width="100px" :model="User">
        <el-form-item label="Username">
            <el-input v-model="User.username"></el-input>
        </el-form-item>
        <el-form-item label="Ownname">
            <el-input v-model="User.ownname"></el-input>
        </el-form-item>
        <el-form-item label="Surname">
            <el-input v-model="User.surname"></el-input>
        </el-form-item>
        <el-form-item label="Password">
            <el-input v-model="User.password"></el-input>
        </el-form-item>
        <el-form-item label="Email">
            <el-input v-model="User.email"></el-input>
        </el-form-item>
        <el-form-item label="Gender">
            <template>
                <el-radio v-model="User.gender" label="1">Male</el-radio>
                <el-radio v-model="User.gender" label="2">Female</el-radio>
            </template>
        </el-form-item>
        <el-form-item label="Age">
            <el-date-picker v-model="User.age" type="date" placeholder="Pick a day"></el-date-picker>
        </el-form-item>
         <el-form-item>
            <el-button type="primary" @click="this.onUpdate">Update</el-button>
        </el-form-item>
    </el-form>   
</template>

<script>
import axios from '../my-axios';
export default {
  data() {
    return {
      labelPosition: 'left',
      User: {
        username: '',
        ownname: '',
        surname: '',
        password: '',
        email: '',
        gender: '1',
        age: ''
      }
    };
  },
  methods: {
    onUpdate() {
      axios
        .post('/test', this.User)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<style>
    .el-date-editor.el-input{
        width: 100%;
    }
</style>
