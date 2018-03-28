<template>
  <div>
    <table class="table table-hover product-table">
      <thead>
        <tr>
          <th>Image</th>
          <th>Title</th>
          <th>Price</th>
          <th>Color</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in items">
          <td><img :src="product.image" /></td>
          <td>{{ product.title }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.color }}</td>   
          <td><el-button size="mini" type="danger" @click="onDelete(product)" icon="el-icon-delete"></el-button></td>
        </tr>
      </tbody>
    </table>
    <el-row :gutter="20">
      <el-col :span="12" :offset="6">
        <div class="grid-content bg-purple">
          <h2>Subtotal : ${{ total }} </h2>
          <el-button type="primary" @click="onBuy">Proceed to checkout</el-button>
        </div>
      </el-col>
    </el-row>
      
  </div>
</template>

<script>
import axios from '../my-axios';
export default {
  props: ['user'],
   data() {
    return {
      items: []
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
  computed: {
    total () {
      return this.items.reduce((sum, product) => {
        return sum + product.price
      }, 0)
    },
  },
  methods: {
    onBuy() {
      let idx = Math.floor(Math.random() * 10000000000);
      let order = {
        'id': idx, 
        'customer_id': this.$props.user._id,
        'customer_name': this.$props.user.ownname,
        'products': this.items 
        }
      let total = this.total;

      // axios.post('https://internet-store-admin.herokuapp.com/api/orders', order)                                 
      //   .then(response => {                                      
      //   console.log(response.data);                              
      //   //this.$router.push('/orders');
      //   console.log('order OK');                              
      // })                                 
      // .catch(error => {                                     
      //   console.log(error);                                 
      // });  

      // axios.post('http://banksystemm.herokuapp.com/payment?sum=' + this.total)                                 
      //   .then(response => {                                      
      //   console.log(response.data); 
      //   console.log('bank OK');                  
      // })                                 
      // .catch(error => {                                     
      //   console.log(error);                                 
      // });  
      
      
      function postOrder() {
        return axios.post('https://internet-store-admin.herokuapp.com/api/orders', order);  
      }

      function postBank() {
        return axios.post('http://banksystemm.herokuapp.com/payment?sum=' + total);
      }

      axios.all([postOrder(), postBank()])
      .then(axios.spread(function (acct, perms) {
        console.log(response.data);
        console.log('good');
      }))
      .catch(error => {                                     
        console.log(error);                                 
      });

      this.$notify({
        title: 'Success',
        message: 'Thank you for your purchase',
        type: 'success'
      });

    },
    onDelete (selected) {
      this.items.forEach((product) => {
        if (product._id === selected._id) {
          const index =  this.items.indexOf(product);
            if (index !== -1) {
              this.items.splice(index, 1);                                      
              axios.delete('/cart/' + product._id)                                 
                .then(response => {
                  console.log(response)                                                 
              })                                 
              .catch(error => {                                     
                console.log(error);                                 
              });
            }
          }
        }
      );
    }
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
  .grid-content{
    display: flex;
    text-align: center;
    flex-direction: column;
  }
</style>
