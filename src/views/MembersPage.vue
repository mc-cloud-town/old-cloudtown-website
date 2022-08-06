<template>
  <div class="members">
    <BaseMemberComponent
      v-for="member in MembersData"
      :key="member.mc_uuid"
      :member="member"
    />
  </div>
</template>

<script lang="ts" setup>
import MembersData_ from '@/data/members.json';
import BaseMemberComponent from '@/components/BaseMember.vue';
import type { MemberType } from '@/types/memberInfo';

const MembersData: MemberType[] = MembersData_;
</script>

<style lang="scss" scoped>
.members {
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(auto-fit, 400px);
  justify-content: center;
  padding: 2em 1em;
}
</style>
