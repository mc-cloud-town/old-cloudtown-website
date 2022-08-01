<template>
  <div class="content-wrap">
    <BaseSection class="info">
      <h1>CloudTown 雲鎮</h1>
      <h3>Minecraft 伺服器</h3>
      <button class="join">加入雲鎮</button>
    </BaseSection>
  </div>
</template>

<script lang="ts" setup>
import BaseSection from '@/components/home/BaseSection.vue';
</script>

<style lang="scss" scoped>
.info {
  display: flex;
  height: calc((100vh - var(--page-margin-top)) * 0.8);
  min-height: 250px;
  background-image: url('https://i.picsum.photos/id/213/1200/1200.jpg?hmac=YGpBsBoxgTZCpr6eToWxHQChbzAuLfLyB7L5G7jSAsI');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 35pt;
  }

  h3 {
    margin-top: 5px;
    font-size: 20pt;
  }

  @media all and (max-width: 600px) {
    h1 {
      font-size: 7.8vw !important;
    }

    h3 {
      font-size: 4.5vw !important;
    }

    .join {
      font-size: 3.5vw !important;
    }
  }

  &,
  .join {
    font-weight: 900;
    text-shadow: 0 0 10px white;
  }

  .join {
    position: relative;
    z-index: 1;
    padding: 5px 15px;
    margin-top: 1em;
    font-size: 16pt;
    cursor: pointer;
    background-color: transparent;
    border: none;

    &::before {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
      border: 2px solid #000;
      content: '';
      transform: skew(-7deg);
      transition: 0.3s background-color ease, 0.3s border ease;
    }

    &:hover {
      text-shadow: none;

      &::before {
        background-color: rgb(15 255 255 / 39.7%);
      }
    }
  }
}
</style>
