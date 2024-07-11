import type { Component } from 'vue';
import type { RouteRecordRaw } from 'vue-router';

export const routes = [
    {
        path: '/',
        name: 'home',
        meta: {
            title: 'Home'
        },
        component: (): Promise<Component> => import('@/pages/Home/HomePage.vue')
    }
] as const satisfies readonly RouteRecordRaw[];
