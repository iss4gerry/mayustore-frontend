<script setup lang="ts">
const { cartItem } = defineProps(['cartItem'])
</script>

<template>
    <div class="product-container" v-for="item in cartItem" :key="item.id">
        <img :src="item.imageUrl" class="product-image">
        <div class="details-wrap">
            <h3>{{ item.name }}</h3>
            <p>Rp {{ item.price }}</p>
        </div>
        <button class="remove-button">Remove</button>
    </div>
</template>

<style scoped>
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