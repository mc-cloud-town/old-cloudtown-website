import { RouteRecordRaw } from 'vue-router';
import { RouterOptions } from 'vite-ssg';

const routes: RouteRecordRaw[] = [
  {
    // 主頁
    name: 'Home',
    path: '/',
    component: () => import('@/views/HomePage.vue'),
  },
  {
    // 詳細成員介紹
    name: 'Members',
    path: '/members',
    component: () => import('@/views/HomePage.vue'),
  },
  {
    // 作品
    name: 'Work',
    path: '/work',
    component: () => import('@/views/HomePage.vue'),
  },
  {
    // 最新動態 ( 可能會串 DC )
    name: 'New',
    path: '/new',
    component: () => import('@/views/HomePage.vue'),
  },
  {
    // 線上地圖
    name: 'Online-Map',
    path: '/map',
    component: () => import('@/views/HomePage.vue'),
  },
];

export const options = (): RouterOptions => ({
  base: import.meta.env.BASE_URL,
  routes,
});

export default options();
