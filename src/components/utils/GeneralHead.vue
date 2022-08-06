<template>
  <Head>
    <title>{{ title }}</title>
    <meta property="og:title" :content="title" />
    <meta property="og:site_name" :content="title" />
    <meta property="twitter:title" :content="title" />

    <meta name="description" :content="description" />
    <meta property="og:description" :content="description" />
    <meta property="twitter:description" :content="description" />

    <meta name="keywords" :content="keywords" />

    <meta property="og:image" :content="image" />
    <meta property="og:image:secure_url" :content="image" />
    <meta property="twitter:image" :content="image" />

    <meta name="theme-color" content="#ffffff" />
    <meta property="og:url" content="https://mc-cloud-town.github.io" />
    <meta property="og:type" content="website" />
    <meta property="twitter:card" content="summary_large_image" />

    <meta name="abstract" content="CloudTown 雲鎮工藝" />
    <meta name="subject" content="CloudTown 雲鎮工藝" />
  </Head>
</template>

<script lang="ts" setup>
import { Head } from '@vueuse/head';

const props = defineProps<{
  title?: string;
  pageTitle?: string;
  keywords?: string[];
  description?: string;
  image?: string;
}>();

const pageTitle = props.pageTitle || '';

let _title: string | void = void 0;
if (pageTitle) _title = `CloudTown 雲鎮工藝 | ${pageTitle}`;

const keywords =
  props.keywords?.join(',') ||
  'minecraft,minecraft 伺服器,紅石服,紅石,建築,生存,生電服,雲鎮,我的世界,技術';

const description =
  props.description ||
  'CloudTown 是一個以純原版為基礎的審核制技術向伺服器，我們的核心理念是創新和研發，我們非常重視及保護成員個人的智慧財產權，並在內互助與交流技術。歡迎各種建築及紅石領域的人才加入我們，當然你抱持著Minecraft的基礎知識和熱忱也可以！';

const title =
  _title || props.title || 'CloudTown 雲鎮工藝 | Minecraft 生存紅石建築服';
</script>
