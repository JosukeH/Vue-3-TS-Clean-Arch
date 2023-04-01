<script setup lang="ts">
// eslint-disable-next-line camelcase
import { UsersInMemoryRepository as __tla_0 } from 'pkg-users-core'

import { onMounted, ref } from 'vue'

const usersRepository = new __tla_0()
const users = ref([])

onMounted(() => {
  // @ts-ignore
  // eslint-disable-next-line camelcase
  usersRepository.get().then((data) => {
    // @ts-ignore
    users.value = data.value.rightValue
  })
})

</script>

<template>
  <div class="w-3/4">
    <h1>Home</h1>
</div>
</template>
