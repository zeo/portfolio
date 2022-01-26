<script setup lang="ts">
import Layout from '../components/Layout.vue';
import backgroundImage from '../assets/background.jpg';
import Skribbl from '../assets/skribbl.svg?component';
import skills from '../data/skills';
import SpotifyPresence from '../components/SpotifyPresence.vue';
</script>

<template>
  <Layout>
    <!-- Image in bottom right -->
    <div class="hidden md:block fixed bottom-0 right-0 md:max-w-lg lg:max-w-2xl pointer-events-none">
      <svg
        class="hidden md:block absolute top-0 left-0 h-full w-full text-gray-900"
        fill="currentColor"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <polygon points="0,0 0,100 100,0" />
      </svg>

      <img
        :src="backgroundImage"
        alt="Background"
      >
    </div>

    <div class="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="max-w-2xl py-16 sm:py-40">
        <h2 class="text-4xl w-min font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
          Zeo

          <Skribbl class="mx-auto mt-2 text-primary-300 w-42 h-6" />
        </h2>

        <p class="mt-8 text-lg text-gray-300">
          My name is Mex de Loo and I've been programming for 4 years, during my time as a developer I've gained
          experience with numerous languages/frameworks/libraries such as Laravel, C#, Lua, React.JS.
        </p>

        <div class="flex space-x-6 mt-5">
          <template
            v-for="(skill, i) in skills"
            :key="i"
          >
            <div class="text-gray-400 transition">
              <span class="sr-only">{{ skill.name }}</span>

              <component
                :is="skill.icon"
                :title="skill.name"
                class="w-8 h-8 hover:text-primary-500 fill-current transition"
              />
            </div>
          </template>
        </div>

        <SpotifyPresence />
      </div>
    </div>
  </Layout>
</template>