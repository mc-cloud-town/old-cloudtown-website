<script lang="ts" setup>
import Project from '@/components/work/TimeLine.vue';

const data = import.meta.glob(`../../data/work/**/*.md`);
const timelineData: {
  [year: string]: {
    [month: string]: {
      [projectName: string]: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        imp: () => Promise<any>;
        id: string;
      };
    };
  };
} = {};

for (const [path, imp] of Object.entries(data)) {
  const projectNames = path.slice(16, -3).split('-'); // '../../data/work/' >> 16, '.md' >> 3
  const [y, m, d] = projectNames.shift()?.split('/') || [];
  const projectName = projectNames.join('-');

  ((timelineData[y] ||= {})[m] ||= {})[projectName] = {
    imp,
    id: `${y}*${m}*${d}-${projectName}`,
  };
}
</script>

<template>
  <GeneralHead />

  <section class="inner">
    <div
      v-for="(yearValue, year, index) of timelineData"
      :key="index"
      class="year"
    >
      <h3>{{ year }}</h3>
      <dl v-for="(monthValue, month, index) of yearValue" :key="index">
        <template v-for="({ imp, id }, index) of monthValue" :key="index">
          <dt>{{ month }}月</dt>
          <dd>
            <router-link :to="{ name: 'work-more', params: { id } }">
              <suspense>
                <Project :line-data="imp" />
              </suspense>
            </router-link>
          </dd>
        </template>
      </dl>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.year {
  position: relative;

  &::after,
  &::before {
    position: absolute;
    content: '';
  }

  &::before {
  }
}
</style>
