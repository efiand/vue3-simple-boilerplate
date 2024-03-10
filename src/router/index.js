import { createRouter, createWebHistory } from 'vue-router';
import IndexPage from '@/router/IndexPage.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'index',
			component: IndexPage,
		},
		{
			path: '/:catchAll(.*)',
			redirect: '/',
		},
	],
});

export default router;
