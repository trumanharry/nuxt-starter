<script setup>
  const props = defineProps({
    title: String,
    description: String,
    items: Array
  });
</script>

<template>
  <div data-sb-field-path="testimonials">
    <h2 class="text-3xl font-bold text-center text-zinc-800 sm:text-4xl" v-if="title" data-sb-field-path=".title">
      {{ title }}
    </h2>
    <p class="max-w-3xl mx-auto mt-4 text-lg text-center text-zinc-600" v-if="description" data-sb-field-path=".description">
      {{ description }}
    </p>
    <div class="mt-10 mb-20 sm:gap-8 sm:columns-2 lg:columns-3">
      <blockquote v-for="(item, index) in items" :key="index" :data-sb-field-path="`.items.${index}`"
        class="p-8 mb-8 border-2 border-dashed rounded-sm border-zinc-300 break-inside-avoid sm:p-12">
        <p class="text-zinc-500" v-if="item.quote" data-sb-field-path=".quote">{{ item.quote }}</p>
        <footer class="flex items-center gap-4 mt-4" v-if="item.author" data-sb-field-path=".author">
          <NuxtImg :src="item.author.avatar" :alt="item.author.name" width="64" height="64"
            class="object-cover w-16 h-16 rounded-sm shrink-0" v-if="item.author.avatar" data-sb-field-path=".avatar .name#@alt" />
          <div class="text-sm" v-if="item.author.name || item.author.title">
            <p class="font-bold text-zinc-800" v-if="item.author.name" data-sb-field-path=".name">{{ item.author.name }}</p>
            <p class="text-zinc-500" v-if="item.author.title" data-sb-field-path=".title">{{ item.author.title }}</p>
          </div>
        </footer>
      </blockquote>
    </div>
  </div>
</template>
