<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

const {as, icon} = defineProps<{
  as: string,
  icon?: IconProp
}>();
</script>

<template>
  <component :is="as ?? 'a'" class="text-gray-300 group flex items-center px-4 py-2 text-sm" role="menuitem" tabindex="-1">
    <FontAwesomeIcon v-if="icon" :icon="icon" class="mr-3 text-gray-400 group-hover:text-gray-500"/>

    <slot></slot>
  </component>
</template>