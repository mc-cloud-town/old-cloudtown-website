<template>
  <header>
    <router-link to="/" class="brand">
      <img
        src="https://cdn.discordapp.com/attachments/998810081237934100/998977829381353522/A84AAD32-680A-4395-AC99-C8E2A31151FB.gif"
        alt="CloudTown-logo"
      />
      CloudTown 雲鎮
    </router-link>
    <div class="navbar">
      <ul class="links" :class="{ active: openMenu }">
        <li v-for="link in links" :key="link.name">
          <a v-if="link.self === false" :href="link.to" v-text="link.name" />
          <router-link v-else :to="link.to">{{ link.name }}</router-link>
        </li>
      </ul>
      <input
        id="menuToggle"
        v-model="openMenu"
        type="checkbox"
        name="menuToggle"
        hidden
      />
      <label class="menu-click" for="menuToggle">
        <SvgIcon name="other-menu" />
      </label>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useCssVar, useEventListener } from '@vueuse/core';

const links: LinkType[] = [
  { name: '成員', to: '/members' },
  { name: '我們的作品', to: '/work' },
  { name: '最新進度', to: '/new' },
  { name: '線上地圖', to: '/map' },
];

const openMenu = ref<boolean>(false);

interface LinkType {
  name: string;
  to: string;
  self?: boolean;
}
onMounted(() => {
  useCssVar('--page-margin-top', document.documentElement).value = '65px';
  useEventListener('resize', () => {
    if (window.innerWidth > 650) openMenu.value = false;
  });
});
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

  .brand {
    display: flex;
    align-items: center;
    height: 100%;
    font-size: 22px;
    font-weight: 600;
    user-select: none;

    img {
      max-height: 100%;
      margin-right: 15px;
      border-radius: 50%;
      -webkit-user-drag: none;
    }
  }

  .navbar {
    .links {
      display: flex;
      list-style: none;

      &.active {
        position: fixed;
        top: var(--page-margin-top);
        right: 0;
        display: flex !important;
        width: auto;
        padding: 15px;
        background-color: #7d7d7d5e;
        border-bottom-left-radius: 8px;
        flex-direction: column;

        li {
          margin: 10px 0;
          font-size: 1.2rem;
        }

        @media all and (max-width: 350px) {
          left: 0;
          border-bottom-left-radius: 0;
        }
      }

      a {
        width: 100%;
        height: 100%;
        padding: 15px 10px;
        margin: 0 8px;
        font-weight: 600;

        &:hover {
          color: #737373;
        }
      }
    }

    .menu-click {
      display: none;
      cursor: pointer;
    }

    @media all and (max-width: 650px) {
      .links {
        display: none;
      }

      .menu-click {
        display: block;
      }
    }
  }
}
</style>
