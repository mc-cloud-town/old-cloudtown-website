<script lang="ts" setup async>
import { useRoute, useRouter } from 'vue-router';

const {
  params: { id: _id },
} = useRoute();
const router = useRouter();

const notFound = () => router.push({ name: 'NotFound' });
if (typeof _id !== 'string') notFound();

const id = _id as string;
const idPath = id.split('-');
const fileName = `${idPath.slice(2).join('-')}.md`;
const path = `../../data/new/${idPath.slice(0, 2).join('/')}/${fileName}`;

const mds = import.meta.glob(`../../data/new/**/*.md`);

if (!(path in mds)) notFound();

const { VueComponent, attributes } = await mds[path]();

const time = attributes.time ? new Date(attributes.time) : void 0;
const title =
  attributes.title && time
    ? `${attributes.title} | ${[
        time.getFullYear(),
        time.getMonth() + 1,
        time.getDate(),
      ].join('-')}`
    : attributes.title;

const assets = import.meta.glob(`../../data/new/**/*.{png,jpg,jpeg,gif,svg}`);
const logoPath = `../../data/new${attributes.logo?.slice(1)}`;

const logo =
  logoPath in assets ? await assets[logoPath]().then((_) => _.default) : void 0;
console.log(logo);
</script>

<template>
  <GeneralHead
    :image="logo"
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
  padding-bottom: 4em;
  margin: 4em auto;

  :deep() {
    font-size: 14pt;

    @for $i from 1 through 6 {
      h#{$i} {
        display: flex;
        margin-top: 24px;
        margin-bottom: 16px;
        font-weight: 600;
        line-height: 1.25em;
        align-items: center;
      }
    }

    // ######
    h6 {
      font-size: 0.85em;
      color: #777;
    }

    // >
    blockquote {
      padding: 0 1em;
      font-size: 16px;
      color: #777;
      border-left: 0.25em solid #ddd;
    }

    // ![alt](url)
    img {
      width: 80%;
      max-width: 800px;
      max-height: 100%;
    }

    // ```
    code {
      padding: 0.2rem 0;
      background-color: #0000000a;
      border-radius: 3px;

      &::after,
      &::before {
        letter-spacing: -0.2em;
        content: '\00a0';
      }
    }
  }
}
</style>
