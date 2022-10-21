<template>
  <div ref="rootEl" class="fade-in-up-scroll" :class="{ isVisible }">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import { useIntersectionObserver } from '@vueuse/core';

type UpDownType = 'up' | 'down';
type EnterLeaveType = 'enter' | 'leave';
type StateType = `${UpDownType}-${EnterLeaveType}`;

const state = ref<StateType>();
const isVisible = ref<boolean>();
const rootEl = ref<HTMLDivElement>();

// eslint-disable-next-line vue/no-setup-props-destructure
const { rootMargin, threshold, one, tTrue, tFalse, callback } = defineProps<{
  rootMargin?: string;
  threshold?: number | number[];
  one?: boolean;
  tTrue?: StateType | StateType[];
  tFalse?: StateType | StateType[];
  callback?: typeof defaultCallback;
}>();

let previousY = 0;
let previousRatio = 0;

const defaultCallback: (
  ev: IntersectionObserverEntry[],
  _observer: IntersectionObserver
) => void = ([{ isIntersecting, boundingClientRect, intersectionRatio }]) => {
  const { y } = boundingClientRect;

  if (y < previousY) {
    state.value =
      intersectionRatio > previousRatio && isIntersecting
        ? 'down-enter'
        : 'down-leave';
  } else if (y > previousY && isIntersecting) {
    state.value = intersectionRatio < previousRatio ? 'up-leave' : 'up-enter';
  }

  previousY = y;
  previousRatio = intersectionRatio;

  if (tFalse?.includes(<StateType>(<unknown>state.value))) {
    isVisible.value = false;
  } else if (tTrue?.includes(<StateType>(<unknown>state.value))) {
    isVisible.value = true;
  } else isVisible.value = isIntersecting;

  if ((one === void 0 || one) && isVisible.value) stop();
};

const { stop } = useIntersectionObserver(rootEl, callback || defaultCallback, {
  threshold,
  rootMargin,
});
</script>

<style lang="scss" scoped>
@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(100px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-up-scroll {
  opacity: 0;
  animation-duration: 0.8s;
  animation-fill-mode: forwards;

  &.isVisible {
    animation-name: fade-in-up;
  }
}
</style>
<style lang="scss">
body.no-js .fade-in-up-scroll {
  opacity: 1;
}
</style>
