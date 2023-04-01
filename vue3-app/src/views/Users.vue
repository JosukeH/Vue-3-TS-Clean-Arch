<script setup lang="ts">
// eslint-disable-next-line camelcase
import { UsersInMemoryRepository as __tla_0 } from 'pkg-users-core'

import { ref, onBeforeMount } from 'vue'
import UserItems from '../components/UserItems.vue';

const usersRepository = new __tla_0()
const users = ref([])

onBeforeMount(() => {
  // @ts-ignore
  // eslint-disable-next-line camelcase
  usersRepository.get().then((data) => {
    // @ts-ignore
    users.value = data.value.rightValue
  })
})

</script>

<template>
  <div>
    <UserItems></UserItems>
</div>
</template>
