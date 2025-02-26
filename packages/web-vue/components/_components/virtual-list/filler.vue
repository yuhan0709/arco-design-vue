<template>
  <div v-if="!disabled" :style="outerStyle">
    <div :style="innerStyle">
      <slot />
    </div>
  </div>
  <slot v-else />
</template>

<script lang="ts">
import { defineComponent, computed, toRefs, CSSProperties } from 'vue';

export default defineComponent({
  name: 'VirtualListFiller',
  props: {
    height: {
      type: Number,
    },
    offset: {
      type: Number,
    },
    disabled: {
      type: Boolean,
    },
  },
  setup(props) {
    const { height, offset } = toRefs(props);

    const outerStyle = computed<CSSProperties>(() =>
      offset.value !== undefined
        ? {
            height: `${height.value}px`,
            position: 'relative',
            overflow: 'hidden',
            zIndex: 0,
          }
        : {}
    );

    const innerStyle = computed<CSSProperties>(() => {
      const commonStyle: CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
      };

      return offset.value !== undefined
        ? {
            ...commonStyle,
            transform: `translateY(${offset.value}px)`,
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
          }
        : commonStyle;
    });

    return {
      outerStyle,
      innerStyle,
    };
  },
});
</script>
