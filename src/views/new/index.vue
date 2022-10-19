<script lang="ts" setup>
import Project from '@/components/new/TimeLine.vue';

const data = import.meta.glob(`../../data/new/**/*.md`);
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
  const projectNames = path.slice(15, -3).split('-'); // '../../data/new/' >> 15, '.md' >> 3
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
            <router-link :to="{ name: 'new-more', params: { id } }">
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
.inner {
  width: 80%;
  margin: 4em auto;
}

.year {
  position: relative;

  > h3 {
    font-size: 40px;
    font-weight: 900;
    color: #006cd8;
  }

  dl {
    line-height: 1.6;

    dt {
      float: left;
      width: 60px;
      padding: 15px 0 0;
      color: #006cd8;
    }

    dd {
      padding: 15px 0 15px 60px;
      color: #666;
      border-bottom: 1px solid #eee;
    }
  }

  &::after,
  &::before {
    position: absolute;
    content: '';
  }

  &::before {
    top: -1em;
    bottom: -1em;
    left: -2em;
    border: 1px solid #e0e4e8;
  }

  &::after {
    top: -5px;
    left: -40px;
    border: 8px solid #e0e4e8;
    border-radius: 50%;
  }
}
</style>
