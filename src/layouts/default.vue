<template>
  <BaseHeader />
  <router-view v-slot="{ Component }">
    <suspense timeout="0">
      <template #default>
        <component :is="Component" :key="$route.path"></component>
      </template>
      <template #fallback>
        <div>Loading...</div>
      </template>
    </suspense>
  </router-view>
</template>

<script lang="ts" setup>
import BaseHeader from '@/components/base/BaseHeader.vue';
</script>
