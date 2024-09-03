<script setup lang="ts">
import { onMounted } from 'vue'
import { Product } from '../views/product/Detail.vue'

const { products } = defineProps(['products'])
const productItem: Product = products as Product
</script>

<template>
    <div class="product-item">
            <img :src="productItem.imageUrl">
            <h3 class="product-name"> {{ productItem.name }} </h3>
            <p class="product-price">Rp{{ productItem.price }}</p>
            <router-link :to="{ name: 'productdetail', params: { id: productItem.id } }">
            <button>Detail</button>
            </router-link>
    </div>
</template>

<style scoped>
.product-item {
    align-items: center;
    border-radius: 8px;
    box-shadow: 0px 2px 5px #888;
    display: flex;
    flex-direction: column;
    margin-bottom: 2%;
    padding: 20px;
    position: relative;
    width: 32%;
  }

  .product-name {
    margin-bottom: 0;
  }

  img {
    height: 200px;
    width: 200px;
    border-radius: 5%;
  }

  a {
    width: 100%;
  }

  button {
    width: 100%;
  }

</style>