<script setup lang="ts">
import axios from 'axios'
import { ref, onMounted, computed } from "vue";
import ItemCart from "../../components/ItemCart.vue";
import { ProductResponse } from '../product/Index.vue'

const cartItem = ref<ProductResponse[]>([])

onMounted(async () => {
   const result = await axios.get(`http://localhost:3000/api/orders/user/1`)
   const { data } =  result.data
   cartItem.value = data[0].products
})

const totalPrice = computed(() => {
    return cartItem.value.reduce((sum, item) => sum + Number(item.price), 0)
})

const removeItem = async(userId: number, itemCode: string) => {
  const result = await axios.delete(`http://localhost:3000/api/orders/user/${userId}/product/${itemCode}`);
  
  if(result.data.status === 200) {
    const index = cartItem.value.findIndex((p) => p.id === itemCode);
    cartItem.value.splice(index, 1);
  }
};

</script>

<template>
    <div id="page-wrap">
        <h1>Shopping Cart</h1>
        <ItemCart :cartItem="cartItem" @delete-product="removeItem" ></ItemCart>
        <h3 id="total-price">Total: {{ totalPrice }}</h3>
        <button id="checkout-button">Checkout</button>
    </div>   
</template>

<style scoped>
h1 {
    border-bottom: 1px solid #41B883;
    margin: 0;
    margin-top: 16px;
    padding: 16px;
  }
  #total-price {
    padding: 16px;
    text-align: right;
  }
  #checkout-button {
    width: 100%;
  }
  
</style>