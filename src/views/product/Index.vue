<script setup lang="ts">
import axios from "axios"
import { onMounted } from 'vue';
import { ref } from "vue";
import Products from "../../components/Product.vue";

export type ProductResponse = {
    id: string
    code: string
    name: string
    price: number
    description: string
    imageUrl: string
    averageRating: number
}

const products = ref<ProductResponse[]>([])

onMounted(async () => {
    const result = await axios.get('http://localhost:3000/api/products')
    const { data } = result.data
    products.value = data
})

</script>

<template>
    <div id="page-wrap">
        <div class="grid-wrap">
            <Products v-for="(product, index) in products" :key="index" :products="product"></Products>
        </div>
    </div>  
</template>

<style scoped>
.grid-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 16px;
  }

</style>