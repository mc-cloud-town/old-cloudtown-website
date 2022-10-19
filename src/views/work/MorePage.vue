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

const { VueComponent, attributes } = await mds[path]();

const title =
  attributes.title && attributes.time
    ? `${attributes.title} | ${attributes.time}`
    : attributes.title;
</script>

<template>
  <GeneralHead
    :image="attributes.logo"
    :title="title"
    :description="attributes.description"
  />
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
