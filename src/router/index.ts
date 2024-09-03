import { createRouter, createWebHistory } from 'vue-router'
import Product from '../views/product/Index.vue'
import ProductDetail from '../views/product/Detail.vue'
import Cart from '../views/cart/Index.vue'
import NotFound from '../views/error/404.vue'

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
    {
        path: '/:catchAll(.*)',
        name: 'notfound',
        component: NotFound
    },
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})