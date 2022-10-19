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
    component: () => import('@/views/MembersPage.vue'),
  },
  {
    // 作品
    path: '/work',
    children: [
      { path: '', component: () => import('@/views/work/index.vue') },
      { path: ':id', component: () => import('@/views/work/MorePage.vue') },
    ],
  },
  {
    // 最新動態 ( 可能會串 DC )
    name: 'New',
    path: '/new',
    component: () => import('@/views/NewPage.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFoundPage.vue'),
  },
];

export const options = (): RouterOptions => ({
  base: import.meta.env.BASE_URL,
  routes,
});

export default options();
