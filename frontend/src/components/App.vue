console.log('TEST')<template>

  <el-container style="height: 100%;">
    <el-header>
        <nav-bar v-bind:user="user"></nav-bar>
    </el-header>
    <el-main>
      <router-view v-bind:user="user"
        element-loading-text="Loading..."
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(255, 255, 255, 0.8)">
      </router-view>
    </el-main>
  </el-container>

</template>

<script>
import NavBar from 'components/navBar';
import axios from '../my-axios';

export default {
  data() {
    return {
      user: []
    }
  },
  components: {
    NavBar,
  },
  beforeCreate() {
    if (localStorage.getItem('user_id')) {
      let user_id = localStorage.getItem('user_id');
       axios.get('/auth/' + user_id)
        .then((response) => {
          console.log(response.data);
          this.user = response.data;
      })
      .catch(function (error) {
        console.log(error),
        alert('User is not found')
      });
    }   
  }
};
</script>
