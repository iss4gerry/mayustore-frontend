import { createRouter, createWebHistory } from 'vue-router'
import Product from '../views/product/Index.vue'
import ProductDetail from '../views/product/Detail.vue'
import Cart from '../views/cart/Index.vue'

const routes = [
    {
        path: '/',
        name: 'product',
        component: Product
    },
    {
        path: '/product/:id',
        name: 'productdetail',
        component: ProductDetail
    },
    {
        path: '/cart',
        name: 'cart',
        component: Cart
    },
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})