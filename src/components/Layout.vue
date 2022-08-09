<script setup lang="ts">
import Dropdown from '../components/Dropdown.vue';
import DropdownItem from './DropdownItem.vue';
import { faGithub, faSteam } from '@fortawesome/free-brands-svg-icons';
import { ref } from 'vue';

const mobileOpen = ref(false);
</script>

<template>
  <div class="min-h-screen bg-gray-900">
    <div class="max-w-5xl mx-auto flex justify-end items-center py-5 sm:py-8 px-4 md:px-0 md:justify-start">
      <div class="md:hidden">
        <button
          type="button"
          class="bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 focus:outline-none"
          aria-expanded="false"
        >
          <span class="sr-only">Open menu</span>
          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            aria-hidden="true"
            @click="mobileOpen = true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <div class="hidden md:flex-1 md:flex md:items-center md:justify-between">
        <nav class="flex space-x-10">
          <router-link
            to="/"
            class="text-gray-300 hover:text-white py-2 rounded-md text-sm font-medium transition"
          >
            Home
          </router-link>

          <router-link
            to="/projects"
            class="text-gray-300 hover:text-white py-2 rounded-md text-sm font-medium transition"
          >
            Projects
          </router-link>

          <Dropdown>
            <template #trigger="{ toggle }">
              <button
                class="text-gray-300 hover:text-white group inline-flex items-center text-sm font-medium py-2 focus:outline-none"
                @click="toggle"
              >
                <span>Socials</span>

                <svg
                  class="text-gray-400 ml-2 h-5 w-5 group-hover:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </template>

            <DropdownItem
              href="https://github.com/zeo"
              target="_blank"
              :icon="faGithub"
            >
              Github
            </DropdownItem>

            <DropdownItem
              href="https://steamcommunity.com/id/zeo-dev/"
              target="_blank"
              :icon="faSteam"
            >
              Steam
            </DropdownItem>
          </Dropdown>
        </nav>
      </div>
    </div>

    <transition
      enter-active-class="duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="mobileOpen"
        class="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
      >
        <div class="rounded-lg bg-gray-800 p-5 space-y-5">
          <div class="sm:pb-8">
            <div class="flex items-center justify-end">
              <button
                type="button"
                class="bg-gray-700 rounded-md p-2 inline-flex items-center justify-center text-gray-400 focus:outline-non"
                @click="mobileOpen = false"
              >
                <span class="sr-only">Close menu</span>
                <!-- Heroicon name: outline/x -->
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div>
            <div class="grid grid-cols-2 gap-4">
              <router-link
                to="/"
                class="text-base font-medium text-gray-100 hover:text-gray-300"
              >
                Home
              </router-link>
              <router-link
                to="/projects"
                class="text-base font-medium text-gray-100 hover:text-gray-300"
              >
                Projects
              </router-link>
            </div>

            <div class="mt-3 space-x-5">
              <a
                href="https://github.com/zeo"
                target="_blank"
              >
                <font-awesome-icon
                  size="lg"
                  :icon="faGithub"
                  class="text-gray-400 hover:text-gray-300"
                />
              </a>

              <a
                href="https://steamcommunity.com/id/zeo-dev/"
                target="_blank"
              >
                <font-awesome-icon
                  size="lg"
                  :icon="faSteam"
                  class="text-gray-400 hover:text-gray-300"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <slot />
  </div>
</template>
