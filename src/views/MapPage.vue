<template>
  <GeneralHead page-title="" />

  <iframe ref="MapEl" :src="MAP_BASE_URL" class="map">
    <p>Your browser does not support iframes.</p>
  </iframe>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const MAP_BASE_URL = 'http://ct2nd.tk';
const MapEl = ref<HTMLIFrameElement>();
</script>

<style lang="scss" scoped>
.map {
  display: block;
  width: 100%;
  height: 100%;
  border: none;
}
</style>
