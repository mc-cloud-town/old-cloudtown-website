<template>
  <GeneralHead
    page-title="成員介紹 | 乘這雲朵飛翔的人"
    :description="description"
    :image="membersLogo"
  />
  <div class="members">
    <BaseMemberComponent
      v-for="member in MembersData"
      :key="member.mc_uuid"
      :member="member"
    />
  </div>
</template>

<script lang="ts" setup>
import membersLogo from '@/assets/images/2022-08-06_spawn.png';
import MembersData_ from '@/data/members.json';
import BaseMemberComponent from '@/components/BaseMember.vue';
import type { MemberType } from '@/types/memberInfo';

const MembersData: MemberType[] = MembersData_;

const fullDescription = `CloudTown 成員: ${MembersData.map((_) => _.name).join(
  ', '
)}`;
const description =
  fullDescription.length > 150
    ? `${fullDescription.slice(0, 150).trim()}...`
    : fullDescription;
</script>

<style lang="scss" scoped>
.members {
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(auto-fit, 400px);
  justify-content: center;
  padding: 2em 1em;

  @media all and (max-width: 500px) {
    grid-template-columns: none;

    .description {
      text-align: center;
    }
  }
}
</style>
