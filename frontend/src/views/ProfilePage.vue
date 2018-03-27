<template>
  <el-row :gutter="20">
    <el-col :span="12" :offset="6">
        <div class="grid-content bg-purple-light">
            <h2>Edit profile</h2>
            <p>Username - {{ user.username }}</p>
            <p>Owname - {{ user.ownname }}</p>
            <p>{{ user.surname }}</p>
            
            <profilePage ></profilePage>
        </div>
    </el-col>
  </el-row>
</template>

<script>
import profilePage from '../components/profilePage.vue';
export default {
  props: ['user'],
  components: {
    'profilePage': profilePage
  }
};
</script>

<style>
.bg-purple-light {
  background: #ebeef5;
}
.grid-content {
  border-radius: 4px;
  padding: 10px 20px;
}
</style>