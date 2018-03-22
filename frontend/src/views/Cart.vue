<template>
  <div>
    <table class="table table-hover product-table">
      <thead>
        <tr>
          <th>Image</th>
          <th>Title</th>
          <th>Price</th>
          <th>Color</th>
          <th>Quantity</th>
          <th>Amount</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody v-for="item in items">
          <tr v-for="product in item.products">
            <td><img :src="product.image" /></td>
            <td>{{ product.title }}</td>
            <td> {{ product.price }}</td>
            <td> {{ product.color }}</td>   
            <td> {{ product.quantity }}</td>   
            <td>{{ item.amount }}</td>
            <td>
              <el-button
                        size="mini"
                        type="danger"
                        @click="onDelete()" icon="el-icon-delete">
              </el-button>
            </td>
          </tr>
      </tbody>
    </table>
    <div class="buy">
      <el-button type="primary" @click="onBuy">Buy</el-button>
    </div>
  </div>
</template>

<script>
import axios from '../my-axios';
export default {
   data() {
    return {
      items: {}
    };
  },
  created: function () {
    axios.get('/cart')
       .then((response) => {
         this.items = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  methods: {
    onBuy() {
      axios.post('/orders', this.items)                                 
        .then(response => {                                     
        console.log(this.$route.name);                                     
        this.$router.push('/orders');                                 
      })                                 
      .catch(error => {                                     
        console.log(error);                                 
      });  
    }
    //  onDelete() {
    //  axios.put('/cart/:_id', this.items)                                 
    //     .then(response => {                                     
    //     console.log(this.$route.name);                                   
    //   })                                 
    //   .catch(error => {                                     
    //     console.log(error);                                 
    //   });  
  }
}
</script>

<style>
  .product-table{
    width: 50%;
    margin: 0 auto 30px auto;
  }
  .product-table td, .product-table th{
    text-align: center;
    vertical-align: middle;
  }
  .product-table img{
    width: 50px;
    height: 50px;
  }
  .buy{
    text-align: center;
  }
</style>
