<script setup lang="ts">
import { computed } from "vue";
import ItemCart from "../../components/ItemCart.vue";
import { cartItems } from "../../data-seed";
import { Product } from '../product/Detail.vue'

const cartItem = cartItems as Product[]

const totalPrice = computed(() => {
    return cartItem.reduce((sum, item) => sum + Number(item.price), 0)
})

</script>

<template>
    <div id="page-wrap">
        <h1>Shopping Cart</h1>
        <ItemCart :cartItem="cartItem"></ItemCart>
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