<script setup lang="ts">
import { useRoute } from 'vue-router'
import { onBeforeMount, ref } from 'vue';
import placeHolderApi from '../api/placeHolderApi'
import type {User} from '../types/User';

const router = useRoute()
const user = ref<User>();

onBeforeMount(() => {
  placeHolderApi.get<User>(`users/${ router.params.id }`)
  .then(res => {
    user.value = res.data
  })
})

</script>


<template>
  <div class="w-full flex items-center justify-center flex-col">
    <div class="bg-white px-4 py-5 sm:px-6 w-3/4 py-3">
  <div class="flex space-x-3">
    <div class="flex-shrink-0">
      <img class="h-10 w-10 rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" alt="">
    </div>
    <div class="flex flex-col gap-3">
      <p class="text-sm font-semibold  text-blue-500">
        <span href="#" class="hover:underline">Name: {{ user?.name }}</span>
      </p>
      <p class="text-sm text-gray-500">
        <span href="#" class="hover:underline">Email: {{ user?.email }}</span>
      </p>
      <p class="text-sm text-gray-500">
        <span href="#" class="hover:underline">Username: {{ user?.username }}</span>
      </p>      <p class="text-sm text-gray-500">
        <span href="#" class="hover:underline">Phone: {{ user?.phone }}</span>
      </p>
      <p class="text-sm text-gray-500">
        <span href="#" class="hover:underline">Website: {{ user?.website }}</span>
      </p>
    </div>
    <div class="flex flex-col gap-3">
      <span class="text-blue-500 font-semibold">Address</span>
      <p class="text-sm text-gray-500 ">
        <span href="#" class="hover:underline">Street: {{ user?.address.street }}</span>
      </p>
      <p class="text-sm text-gray-500">
        <span href="#" class="hover:underline">Suite: {{ user?.address.suite }}</span>
      </p>
      <p class="text-sm text-gray-500">
        <span href="#" class="hover:underline">City: {{ user?.address.city }}</span>
      </p>      <p class="text-sm text-gray-500">
        <span href="#" class="hover:underline">Zipcode: {{ user?.address.zipcode }}</span>
      </p>
    </div>

    <div class="flex flex-col gap-3">
      <span class="text-blue-500 font-semibold">Company</span>
      <p class="text-sm text-gray-500 ">
        <span href="#" class="hover:underline">Name: {{ user?.company.name }}</span>
      </p>
      <p class="text-sm text-gray-500">
        <span href="#" class="hover:underline">Suite: {{ user?.company.catchPhrase }}</span>
      </p>
      <p class="text-sm text-gray-500">
        <span href="#" class="hover:underline">City: {{ user?.company.bs}}</span>
      </p>    
    </div>
   
  </div>
</div>
  </div>
</template>