<script setup lang="ts">
import { useRoute } from 'vue-router'
import { onBeforeMount,  ref } from 'vue';
import placeHolderApi from '../api/placeHolderApi'
import type Post from '../types/Post';

const router = useRoute()
const post = ref<Post>();

onBeforeMount(() => {
  placeHolderApi.get<Post>(`posts/${ router.params.id }`)
  .then(res => {
    post.value = res.data
  })
})



</script>


<template>
  <div class="w-full flex items-center justify-center flex-col">
    <div class="bg-white px-4 py-5 sm:px-6 w-1/4 py-3 shadow-md rounded-md">
  <div class="flex space-x-3">
    <div class="mx-3 flex flex-col gap-3">
      <p class="text-sm font-semibold">
        <span href="#" class="hover:underline">Title: {{ post?.title }}</span>
      </p>
      <p class="text-sm text-gray-500">
        <span href="#" class="hover:underline">Post id: {{ post?.id  }}</span>
      </p>
      <p class="text-sm text-gray-500">
        <span href="#" class="hover:underline">Publisher id: {{ post?.userId  }}</span>
      </p>
      <p class="text-sm text-gray-500">
        <span href="#" class="hover:underline">Content: {{ post?.body  }}</span>
      </p>      

    </div>

   
  </div>
</div>
  </div>
</template>