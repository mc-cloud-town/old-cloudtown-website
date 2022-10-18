/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module '*.yaml' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const src: any;
  export default src;
}
declare module '*.yml' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const src: any;
  export default src;
}
