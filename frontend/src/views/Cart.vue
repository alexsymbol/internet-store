<template>
  <div>
    <table class="table table-hover product-table">
      <thead>
        <tr>
          <th>Image</th>
          <th>Title</th>
          <th>Price</th>
          <th>Color</th>
          <!-- <th>Quantity</th> -->
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
          <tr v-for="product in items">
            <td><img :src="product.image" /></td>
            <td>{{ product.title }}</td>
            <td> {{ product.price }}</td>
            <td> {{ product.color }}</td>   
            <!-- <td><el-input-number v-model="num1" value="product.quantity" @change="handleChange" :min="1" :max="10"></el-input-number></td>    -->
            <td><el-button size="mini" type="danger" @click="onDelete(product)" icon="el-icon-delete"></el-button></td>
          </tr>
      </tbody>
    </table>
     <p>Загальна сума - </p>
            <el-button type="primary" @click="onBuy">Buy</el-button>
  </div>
</template>

<script>
import axios from '../my-axios';
export default {
   data() {
    return {
      items: {},
      num1: [],
      amount: ''
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
    handleChange(value) {
        console.log(value)
      },
    onBuy() {
      axios.get('/orders', this.items)                                 
        .then(response => {                                     
        console.log(this.$route.name);                                     
        this.$router.push('/orders');                                 
      })                                 
      .catch(error => {                                     
        console.log(error);                                 
      });  
    },
    onDelete (selected) {
        this.items.forEach((product) => {
            if (product._id === selected._id) {
              const index =  this.items.indexOf(product);
                if (index !== -1) {
                   this.items.splice(index, 1);  //                                            
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
</style>
