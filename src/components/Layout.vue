<script setup lang="ts">
import Dropdown from '../components/Dropdown.vue';
import DropdownItem from './DropdownItem.vue';
import { faGithub, faSteam } from '@fortawesome/free-brands-svg-icons';
</script>

<template>
  <div class="min-h-screen bg-gray-900">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      <nav class="hidden md:flex space-x-10">
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

    <slot />
  </div>
</template>