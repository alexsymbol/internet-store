<template>
  <el-row :gutter="20">
    <el-col :span="8" :offset="7">
      <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="Profile" name="first">
            <div class="grid-content bg-purple-light">
              <h2>Profile</h2>
              <el-form :label-position="labelPosition" label-width="100px">
                <el-form-item label="Username">
                    <span>{{ user.username }}</span>
                </el-form-item>
                <el-form-item label="Ownname">
                    <span>{{ user.ownname }}</span>
                </el-form-item>
                <el-form-item label="Surname">
                    <span>{{ user.surname }}</span>
                </el-form-item>
                <el-form-item label="Password">
                    <span>{{ user.password }}</span>
                </el-form-item>
                <el-form-item label="Email">
                    <span>{{ user.email }}</span>
                </el-form-item>
                <el-form-item label="Age">
                    <span>{{ user.age }}</span>
                </el-form-item>
              </el-form>   
              <el-button type="warning" @click="logout">Log out</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="Edit profile" name="second">
              <ProfilePage ></ProfilePage>
          </el-tab-pane>
        </el-tabs>
    </el-col>
  </el-row>
</template>

<script>
import Profilepage from '../components/Profilepage.vue';
export default {
  data() {
    return {
      labelPosition: 'left',
      activeName: 'first'
    };
  },
  props: ['user'],
  components: {
    'Profilepage': Profilepage
  },
  methods: {
    logout() {
      localStorage.removeItem('jwtToken')
      localStorage.removeItem('user_id')        
      window.location.href = '/login'
    },
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style>
  .el-form-item span{
    font-weight: bold;
  }
  .el-button{
    margin: 20px 0 10px 0;
  }
</style>