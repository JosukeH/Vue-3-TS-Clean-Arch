<script setup lang="ts">
import { ref } from 'vue';
import placeHolderApi from '../api/placeHolderApi'
import type User from '../types/User';

const users = ref<User[]>([]);

placeHolderApi.get<User[]>('/users')
  .then(res => {
    users.value = res.data
  })

</script>

<template>
  <div class="w-1/2 mt-3">
    
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-base font-semibold leading-6 text-gray-900">Lista de usuarios</h1>
      </div>
      <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
        <button type="button" class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add user</button>
      </div>
    </div>
    <div class="mt-8 flow-root">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table class="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Titulo</th>
                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Id</th>
                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Acciones</th>
                <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr v-for="user in users" :key="user.id">
                <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">{{ user.name }}</td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ user.id }}</td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  
                  <router-link class="inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900" 
                  :to="'/users/'+ user.id">
                  Ver
                  </router-link>
                </td>
                  
                
                
               
              </tr>
            </tbody>
          </table>
        </div>
        </div>
        </div>
        </div>
        </div>

</template>

