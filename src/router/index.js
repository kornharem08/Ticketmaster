import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/index.vue'
import Checkout from '@/views/checkout/index.vue'
import discover from '@/views/discover/index.vue'
export default createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home,
		},
        {
			path: '/checkout',
			name: 'checkout',
			component: Checkout,
		},
        {
            path: '/discover/:name',
            name: 'discover',
            component: discover,
        }
	],
})