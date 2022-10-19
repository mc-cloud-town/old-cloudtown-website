<script lang="ts" setup async>
import type { Component } from 'vue';

const props = defineProps<{
  lineData: () => Promise<{
    [key: string]: {
      VueComponent: Component;
      attributes: Record<string, string | number | null>;
    };
  }>;
}>();

const { attributes } = await props.lineData();
</script>

<template>
  {{ attributes }}
</template>

<style lang="scss" scoped></style>
