<script setup lang="ts">
import Products from '../../components/Product.vue'
import { products } from '../../data-seed'

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