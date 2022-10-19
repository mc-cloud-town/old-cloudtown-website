<script lang="ts" setup async>
import { useRoute, useRouter } from 'vue-router';

const {
  params: { id: _id },
} = useRoute();
const router = useRouter();

const notFound = () => router.push({ name: 'NotFound' });
if (typeof _id !== 'string') notFound();

const id = _id as string;
const path = `../../data/work/${id.split('*').join('/')}.md`;
const mds = import.meta.glob(`../../data/work/**/*.md`);

if (!(path in mds)) notFound();

const { VueComponent } = await mds[path]();
</script>

<template>
  <GeneralHead />
  <div class="info">
    <component :is="VueComponent" />
  </div>
</template>

<style lang="scss" scoped>
.info {
  width: 80%;
  margin: 4em auto;
}
</style>
