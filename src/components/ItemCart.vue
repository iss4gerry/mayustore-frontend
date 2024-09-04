<script setup lang="ts">
const { cartItem } = defineProps(['cartItem'])
const emit = defineEmits(['delete-product'])
</script>

<template>
    <h4 class="notif">Item deleted successfully</h4>
    <div class="product-container" v-for="item in cartItem" :key="item.id">
        <img :src="`http://localhost:3000${item.imageUrl}`" class="product-image">
        <div class="details-wrap">
            <h3>{{ item.name }}</h3>
            <p>Rp {{ item.price }}</p>
        </div>
        <button class="remove-button" @click="$emit('delete-product', 1, item.code)" >Remove</button>
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
  .notif {
    text-align: center;
    color: white;
    background-color: #41b883;
    padding: 3%;
    border-radius: 8px;
  }
</style>