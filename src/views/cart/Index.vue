<script setup lang="ts">
import { computed, onMounted } from "vue";
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
        <div class="product-container" v-for="item in cartItem" :key="item.id">
            <img :src="item.imageUrl" class="product-image">
            <div class="details-wrap">
                <h3>{{ item.name }}</h3>
                <p>Rp {{ item.price }}</p>
            </div>
            <button class="remove-button">Remove</button>
        </div>
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
  .product-container {
    align-content: 'center';
    border-bottom: 1px solid #ddd;
    display: flex;
    padding: 16px;
    width: 100%;
  }
  .product-image {
    flex: 1;
    height: 100px;
    max-width: 100px;
  }
  .details-wrap {
    padding: 0 16px;
    flex: 3;
  }
  .remove-button {
    flex: 1;
    margin: auto;
  }
</style>