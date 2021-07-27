//import vue router
import { createRouter, createWebHistory } from 'vue-router'

//define a routes
const routes = [
    {
        path: '/login',
        name: 'login',
        component: () => import( /* webpackChunkName: "login" */ '@/views/auth/Login.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import( /* webpackChunkName: "register" */ '@/views/auth/Register.vue')
    },
    {
        path: '/crudmhs',
        name: 'crudmhs',
        component: () => import( /* webpackChunkName: "crudmhs" */ '@/views/crud/IndexCrud.vue')
    },
    {
        path: '/create',
        name: 'create',
        component: () => import( /* webpackChunkName: "create" */ '@/views/crud/Create.vue')
    },
    {
        path: '/edit',
        name: 'edit',
        component: () => import( /* webpackChunkName: "edit" */ '@/views/crud/Edit.vue')
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import( /* webpackChunkName: "dashboard" */ '@/views/dashboard/Index.vue')
    }
]

//create router
const router = createRouter({
    history: createWebHistory(),
    routes  // config routes
})

export default router