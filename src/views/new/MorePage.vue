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
  padding-bottom: 4em;
  margin: 4em auto;

  :deep(p) {
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
