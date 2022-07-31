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
  .join {
    position: relative;
    padding: 5px 15px;
    font-size: 13pt;
    font-weight: 600;
    background-color: transparent;
    // background-image: url();
    border: none;

    &::before {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border: 2px solid #000;
      content: '';
      transform: skew(-7deg);
      transition: 0.3s background-color ease, 0.3s border ease;
    }
  }
}
</style>
