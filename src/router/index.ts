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
    name: 'Portfolio',
    path: '/portfolio',
    component: () => import('@/views/PortfolioPage.vue'),
  },
  {
    // 最新動態 ( 可能會串 DC )
    name: 'New',
    path: '/new',
    children: [
      { path: '', component: () => import('@/views/new/index.vue') },
      {
        name: 'new-more',
        path: ':id',
        component: () => import('@/views/new/MorePage.vue'),
      },
    ],
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
