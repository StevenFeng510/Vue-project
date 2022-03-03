import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Main',
        component: () => import('../views/Main'),
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('../views/Home'),
            },
            {
                path: '/User',
                name: 'user',
                component: () => import('../views/User'),
            },
            {
                path: '/mall',
                name: 'mall',
                component: () => import('../views/Mall'),
            },
            {
                path: '/page1',
                name: 'page1',
                component: () => import('../views/Other/pageOne.vue'),
            },
            {
                path: '/page2',
                name: 'page2',
                component: () => import('../views/Other/pageTwo.vue'),
            },
        ],
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login'),
    },
];

export default new VueRouter({
    mode: 'history',
    routes,
});
