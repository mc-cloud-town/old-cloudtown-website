<script lang="ts" setup>
import Project from '@/components/work/TimeLine.vue';

const data = import.meta.glob(`../../data/work/**/*.md`);
const timelineData: {
  [year: string]: {
    [month: string]: {
      [day: string]: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        [projectName: string]: () => Promise<{ [key: string]: any }>;
      };
    };
  };
} = {};

for (const [path, imp] of Object.entries(data)) {
  const projectName = path.slice(16, -3); // '../../data/work/' >> 16, '.md' >> 3
  const [y, m, d] = projectName.split('-').shift()?.split('/') || [];

  timelineData[y] ||= {};
  timelineData[y][m] ||= {};
  timelineData[y][m][d] ||= {};
  timelineData[y][m][d][projectName] = imp;
}
</script>

<template>
  <GeneralHead />

  <div
    v-for="(yearValue, year, index) of timelineData"
    :key="index"
    class="year"
  >
    <div
      v-for="(monthValue, month, index) of yearValue"
      :key="index"
      class="month"
    >
      <div
        v-for="(dayValue, day, index) of monthValue"
        :key="index"
        class="day"
      >
        <div
          v-for="(projectValue, name, index) of dayValue"
          :key="index"
          class="project"
        >
          <suspense>
            <Project :line-data="projectValue" />
          </suspense>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
