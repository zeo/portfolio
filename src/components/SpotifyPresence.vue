<script setup lang="ts">
import useSpotifyData from "../hooks/useSpotifyData";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faSpotify} from "@fortawesome/free-brands-svg-icons";
import musicImage from "../assets/music.webp";

const data = useSpotifyData();
</script>

<template>
  <div class="relative mt-8 rounded-lg bg-gray-900 border border-primary-300 border-2 border-dashed hover:bg-gray-800 transition px-6 py-5 shadow-sm flex items-center space-x-3 max-w-lg">
    <div class="flex-shrink-0">
      <div v-if="data === null" class="w-10 h-10 rounded-full bg-gray-700 animate-pulse"/>
      <img v-else class="h-10 w-10 rounded-full" :src="data ? data.album_art_url : musicImage" alt="">
    </div>
    <div class="flex-1 min-w-0">
      <div v-if="data === null" class="space-y-2">
        <div class="w-72 h-4 bg-gray-700 animate-pulse rounded"></div>
        <div class="w-40 h-4 bg-gray-700 animate-pulse rounded"></div>
      </div>

      <a v-else :href="`https://open.spotify.com/track/${data.track_id}`" class="focus:outline-none">
        <span class="absolute inset-0" aria-hidden="true"></span>

        <p class="text-sm font-medium text-gray-300 overflow-ellipsis whitespace-nowrap truncate">
            <span v-if="data">
              {{ data.song }} &middot; {{ data.artist }}
            </span>
            <span v-else>
              Concentrating...
            </span>
        </p>

        <p class="text-sm text-gray-500 truncate">
          <FontAwesomeIcon :icon="faSpotify" size="lg" class="mr-1"/>

          <span class="pt-2">
            {{ data ? 'Currently listening' : 'Currently listening to nothing' }}
          </span>
        </p>
      </a>
    </div>
  </div>
</template>