<script setup lang="ts">
import projects from "../data/projects";
import projectTags from "../data/project-tags";
import Layout from "../components/Layout.vue";
</script>

<template>
  <Layout>
    <div class="md:max-w-5xl md:mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <template v-for="(project, i) in projects" :key="i">
        <div
            class="flex flex-col rounded-md border-transparent border-2 hover:border-primary-300 transition duration-200"
            :class="i % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'"
        >
          <div class="md:w-1/2">
            <img class="w-full h-full" :src="project.image"
                 :class="i % 2 === 0 ? 'rounded-r-md' : 'rounded-l-md'"
            />
          </div>

          <div class="md:w-1/2 bg-gray-800 p-5" :class="i % 2 === 0 ? 'rounded-l-md' : 'rounded-r-md'">
            <div class="mb-4 space-x-2">
              <template v-for="(tag, j) in project.tags" :key="j">
                <span v-if="projectTags[tag]" class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                      :class="projectTags[tag].color">
                  {{ projectTags[tag].name }}
                </span>
              </template>
            </div>

            <a :href="project.url || '#'" class="block mt-2">
              <p class="text-xl font-bold text-white">
                {{ project.name }}
              </p>
              <p class="mt-2 text-sm text-gray-300">
                {{ project.description }}
              </p>

              <p class="text-gray-500 text-xs mt-5">
                <svg xmlns="http://www.w3.org/2000/svg" class="inline h-4 w-4" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                {{ project.timeFrame }}
              </p>
            </a>
          </div>
        </div>
      </template>
    </div>
  </Layout>
</template>