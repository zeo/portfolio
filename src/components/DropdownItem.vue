<script setup lang="ts">
import { defineProps } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const props = defineProps<{
  as?: string,
  icon?: IconProp
}>();
</script>

<template>
  <component
    :is="props.as ?? 'a'"
    class="text-gray-300 hover:text-gray-200 group flex items-center px-4 py-2 text-sm"
    role="menuitem"
    tabindex="-1"
  >
    <FontAwesomeIcon
      v-if="props.icon"
      :icon="props.icon"
      size="lg"
      class="mr-3 text-gray-400 group-hover:text-gray-300"
    />

    <slot />
  </component>
</template>