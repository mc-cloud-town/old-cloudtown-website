<template>
  <div class="member">
    <div class="avatar">
      <img
        :src="`https://crafatar.com/avatars/${member.mc_uuid}`"
        alt="avatar"
      />
    </div>
    <div class="description">
      <div class="name">
        <h1 v-text="member.name"></h1>
        <h3 v-text="`( ${member.mc_name} )`"></h3>
      </div>
      <p v-text="member.description"></p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { MemberType } from '@/types/memberInfo';

defineProps<{ member: MemberType }>();
</script>

<style lang="scss" scoped>
.member {
  display: flex;
  gap: 15px;
  align-items: center;

  .description {
    &,
    .name {
      width: 100%;
    }

    h3 {
      font-size: 13pt;
      font-weight: 400;
    }
  }
}
</style>
