<template>
  <header>
    <router-link to="/" class="brand">
      <img
        src="@/assets/images/CloudTown-45x45x.gif"
        alt="CloudTown-logo"
        width="45"
        height="45"
      />
      CloudTown 雲鎮
    </router-link>
    <div class="navbar">
      <OnClickOutside @trigger="openMenu = false">
        <ul class="links" :class="{ active: openMenu }">
          <li v-for="link in links" :key="link.name">
            <a
              v-if="link.self === false"
              :href="link.to"
              target="_blank"
              v-text="link.name"
            />
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
      </OnClickOutside>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useCssVar, useEventListener } from '@vueuse/core';
import { OnClickOutside } from '@vueuse/components';

const links: LinkType[] = [
  { name: '成員', to: '/members' },
  { name: '我們的作品', to: '/portfolio' },
  { name: '最新進度', to: '/new' },
  // TODO to map url
  { name: '線上地圖', to: 'http://ct2nd.tk', self: false },
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
  z-index: 9999999999;
  display: flex;
  height: 65px;
  padding: 10px 15px;
  background-color: #e7e7e7cc;
  justify-content: space-between;
  align-items: center;

  .brand {
    display: flex;
    align-items: center;
    height: 100%;
    font-size: 22px;
    font-weight: 600;
    user-select: none;

    @media all and (max-width: 350px) {
      font-size: 6.2vw;
    }

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
        background-color: #9b9b9b;
        border-bottom-left-radius: 8px;
        flex-direction: column;

        a {
          color: #e8e8e8;

          &:hover {
            color: rgb(208 208 208);
          }
        }

        li {
          margin: 10px 0;
          font-size: 1.2rem;
        }

        @media all and (max-width: 400px) {
          left: 0;
          border-bottom-left-radius: 0;
          align-items: center;
        }
      }

      a {
        width: 100%;
        height: 100%;
        padding: 5px 10px;
        margin: 0 8px;
        font-weight: 600;
        transition: 0.2s color ease-in-out;

        &:hover {
          color: #505050;
        }

        &.router-link-active {
          border-bottom: solid 2px #1e6c6e;
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
