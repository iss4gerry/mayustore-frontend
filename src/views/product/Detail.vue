<script setup lang="ts">
import axios from 'axios'
import { useRoute } from "vue-router"
import NotFound from '../error/404.vue'
import { ref, onMounted } from "vue";
import { ProductResponse } from "./Index.vue";

const route = useRoute()
const product = ref<ProductResponse>()
const notif = ref(false)

onMounted(async () => {
  const result = await axios.get(`http://localhost:3000/api/products/${route.params.id}`)
  const { data } = result.data
  product.value = data
})

const addToCart = async (userId: number, code: number) => {
    const result = await axios.post(`http://localhost:3000/api/orders/user/${userId}/add`, {
      product: code
    })

    if(result.data.status === 200){
      notif.value = true
    }
}

</script>

<template>
    <div v-if="product" id="page-wrap">
      <h4 v-if="notif" class="notif">Item added successfully</h4>
        <div id="img-wrap">
            <img :src="`http://localhost:3000${product.imageUrl}`">
        </div>
        <div id="product-details">
            <h1>{{ product.name }}</h1>
            <h3 id="price"> {{ product.price }}</h3>
            <p>Average Rating:  {{ product.averageRating }}</p>
            <button id="add-to-cart" @click="addToCart(1, Number(product.code))">Add to cart</button>
            <p>{{ product.description }}</p>
        </div>
    </div>   
    <NotFound v-else></NotFound>
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

  .notif {
    text-align: center;
    color: white;
    background-color: #41b883;
    padding: 3%;
    border-radius: 8px;
  }
</style>