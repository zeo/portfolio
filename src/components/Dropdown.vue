<script setup lang="ts">
import { ref, defineProps } from 'vue';

const props = defineProps<{ open?: boolean }>();

const open = ref(props.open ?? false);

const toggle = () => {
    open.value = !open.value;
};
</script>

<template>
  <div class="relative">
    <slot
      name="trigger"
      :toggle="toggle"
    />

    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div
        v-if="open"
        class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-gray-800"
        role="menu"
        tabindex="-1"
      >
        <div
          class="py-1"
          role="none"
        >
          <slot />
        </div>
      </div>
    </transition>
  </div>
</template>