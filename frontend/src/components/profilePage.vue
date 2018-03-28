<template>
    <div class="grid-content bg-purple-light">
        <h2>Edit profile</h2>
        <el-form :label-position="labelPosition" label-width="150px" :model="User">
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
            <el-form-item label="Age">
                <el-date-picker v-model="User.age" type="date" placeholder="Pick a day"></el-date-picker>
            </el-form-item>
        </el-form>   
        <el-button type="primary" @click="this.onUpdate">Update</el-button>
    </div>
</template>

<script>
import axios from '../my-axios';
export default {
  data() {
    return {
      labelPosition: 'left',
      User: {}
    };
  },
  methods: {
    onUpdate() {
      axios
        .put('/auth/:_id ', this.User)
        .then(function(response) {
          console.log(response);
        console.log('OK');
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<style>
    h2{
        margin: 0 0 30px 0;
    }
    .el-date-editor.el-input{
        width: 100%;
    }
    .el-form-item{
        margin: 0;
    }
    .bg-purple-light {
        background: #F2F6FC;
    }
    .grid-content {
        border-radius: 4px;
        padding: 10px 20px;
    }
</style>
