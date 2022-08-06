<template>
  <div class="content-wrap">
    <BaseSection class="info">
      <h1>CloudTown 雲鎮</h1>
      <h3>Minecraft 伺服器</h3>
      <span class="runtime_span" v-text="runtimeSpan"></span>
      <a class="join" href="https://discord.gg/9wbGuaMHKN" target="_blank">
        加入雲鎮
      </a>
    </BaseSection>
    <BaseSection class="description">
      <h1>關於 CloudTown 雲鎮</h1>
      <div class="content">
        一個以純原版為基礎的審核制技術向伺服器，我們的核心理念是
        <strong> 創新 </strong> 和
        <strong> 研發 </strong>，歡迎各種建築及紅石人才加入我們，當然如果你對
        Minecraft 抱持了熱誠 也可以歐~
      </div>
    </BaseSection>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useIntervalFn } from '@vueuse/core';
import BaseSection from '@/components/home/BaseSection.vue';

const runtimeSpan = ref('');
const baseDate = new Date('2022-07-22T16:00:00.000Z');

const secondsMs = 1e3;
const minutesMs = secondsMs * 60;
const hoursMs = minutesMs * 60;
const daysMs = hoursMs * 24;
const timeStr = ['天', '小時', '分鐘', '秒'];

useIntervalFn(
  () => {
    const diff = new Date().getTime() - baseDate.getTime();

    const days = Math.floor(diff / daysMs);
    const leave1 = diff % daysMs;
    const leave2 = leave1 % hoursMs;

    const timeLest = [
      days,
      Math.floor(leave1 / hoursMs),
      Math.floor(leave2 / minutesMs),
      Math.round((leave2 % minutesMs) / secondsMs),
    ];

    runtimeSpan.value = timeLest
      .map((count, index) => {
        return `${count.toString().padStart(2, '0')} ${timeStr[index]}`;
      })
      .join(' ');
  },
  200,
  { immediateCallback: true }
);
</script>

<style lang="scss" scoped>
.info {
  display: flex;
  height: calc((100vh - var(--page-margin-top)) * 0.8);
  max-height: 1200px;
  min-height: 250px;
  background-image: url('@/assets/images/2022-08-06_spawn.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  user-select: none;
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
    color: white;
    text-shadow: 0 0 20px black;
  }

  .runtime_span {
    margin-top: 30px;
    font-size: 20pt;

    @media all and (max-width: 600px) {
      font-size: 4.4vw;
    }
  }

  .join {
    position: relative;
    z-index: 1;
    padding: 5px 15px;
    margin-top: 1em;
    font-size: 16pt;
    cursor: pointer;
    background-color: transparent;
    transition: 0.4s color ease-in-out;

    &::before {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
      border: 2px solid #dbb7d1;
      content: '';
      transform: skew(-7deg);
      transition: 0.4s background-color ease-in-out;
    }

    &:hover {
      color: black;
      text-shadow: none;

      &::before {
        background-color: #a8e2e5;
      }
    }
  }
}

.description {
  display: flex;
  padding: 1em;
  font-size: 18pt;
  text-align: center;
  background-color: #8ec5cd44;
  align-items: center;
  flex-direction: column;

  .content {
    margin-top: 2em;
    font-size: 14pt;
  }
}
</style>
