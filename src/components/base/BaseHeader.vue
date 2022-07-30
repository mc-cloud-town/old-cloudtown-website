<template>
  <header>
    <h1>
      <router-link to="/">CloudTown 雲鎮</router-link>
    </h1>
    <ul class="navbar">
      <li v-for="link in links" :key="link.name">
        <a v-if="link.self === false" :href="link.to" v-text="link.name" />
        <router-link v-else :to="link.to">{{ link.name }}</router-link>
      </li>
    </ul>
  </header>
</template>

<script lang="ts" setup>
import { useCssVar } from '@vueuse/core';

const links: LinkType[] = [
  { name: '成員', to: '/members' },
  { name: '我們的作品', to: '/work' },
  { name: '最新進度', to: '/new' },
  { name: '線上地圖', to: '/map' },
];

interface LinkType {
  name: string;
  to: string;
  self?: boolean;
}

useCssVar('--page-margin-top', document.documentElement).value = '65px';
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  height: 65px;
  padding: 10px 15px;
  background-color: #c8c8c85e;
  justify-content: space-between;
  align-items: center;

  .navbar {
    display: flex;
    list-style: none;

    li a {
      width: 100%;
      height: 100%;
      padding: 15px 10px;
      margin: 0 8px;
      font-weight: 600;

      &:hover {
        color: rgb(115 115 115);
      }
    }
  }
}
</style>
