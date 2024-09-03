<script setup lang="ts">

import { computed, onMounted } from "vue"
import { useRoute } from "vue-router"
import { products } from "../../data-seed"

type Product = {
  id: string;
  name: string;
  price: string;
  description: string;
  imageUrl: string;
  averageRating: string;
};


const route = useRoute()

const product = computed<Product | undefined>(() => {
    return products.find((p) => {
        return p.id === route.params.id
    })
})

onMounted(() => {
    console.log(product.value)
})

</script>

<template>
    <div id="page-wrap">
        <div id="img-wrap">
            <img :src="product.imageUrl">
        </div>
        <div id="product-details">
            <h1>{{ product.name }}</h1>
            <h3 id="price"> {{ product.price }}</h3>
            <p>Average Rating:  {{ product.averageRating }}</p>
            <button id="add-to-cart">Add to cart</button>
            <p>{{ product.description }}</p>
        </div>
    </div>   
</template>

<style scoped>
#page-wrap {
    margin-top: 16px;
    padding: 16px;
    max-width: 600px;
  }

  #img-wrap {
    text-align: center;
  }

  img {
    width: 400px;
  }

  #product-details {
    padding: 16px;
    position: relative;
  }

  #add-to-cart {
    width: 100%;
  }

  #price {
    position: absolute;
    top: 24px;
    right: 16px;
  }
</style>