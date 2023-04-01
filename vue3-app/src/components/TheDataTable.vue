<script setup lang="ts" >
import { FolderOpenIcon, PencilSquareIcon, TrashIcon } from "@heroicons/vue";

interface Action {
  label: string,
  callback: Function,
  type: string
}

interface DatatableProps {
  options: any[],
  containerClass?: string
  headerClass?: string
  childrenClass?: string
  dataTestid?: string
  isEditable?: boolean
  isDeletable?: boolean
  isOpenable?: boolean
  event?: Function,
  editEvent?: Function,
  actions?: Action[]
}

const props = withDefaults(defineProps<DatatableProps>(), {
  containerClass: "",
  headerClass: "",
  childrenClass: "",
  dataTestid: "datatable",
  isDeletable: false,
  isEditable: false,
  isOpenable: false,
  event: () => {
  },
  editEvent: () => {
  },
  actions: () => [],

});

const viewActions = (props.actions.length > 0) || props.isEditable || props.isDeletable;

const columns = Object.keys(props.options[0]);
</script>

<template>
  <div :class="containerClass" class="mx-3 mr-3 flex w-7/8">
    <div class="mt-4 flex w-full flex-col">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block px-px py-2 align-middle">
          <div class="shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table :data-testid="dataTestid" class="overflow-scroll overflow-x-auto divide-y divide-gray-300">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    v-for="(column, index) in columns"
                    :key="index"
                    :class="headerClass"
                    class="capitalize py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6
                      min-w-[80px] whitespace-nowrap"
                    scope="col"
                  >
                    {{ column }}
                  </th>
                  <th
                    v-if="viewActions"
                    class="pr-3 pl-4 text-left text-sm font-semibold capitalize text-gray-900 py-3.5 sm:pl-6"
                    scope="col"
                  >
                  Acciones
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr
                  v-for="(item, index) in options"
                  :key="index"
                  class="relative whitespace-nowrap py-4 pr-4 pl-3 text-left text-sm font-medium sm:pr-6"
                >
                  <td
                    v-for="(column, index2) in columns"
                    :key="index2"
                    :class="childrenClass"
                    class="whitespace-nowrap py-4 pr-3 pl-4 text-sm capitalize sm:pl-6"
                  >
                    {{ item[column] }}
                  </td>
                  <td
                    v-if="viewActions"
                    class="flex items-center justify-center whitespace-nowrap py-4 pr-3 pl-4 text-sm sm:pl-6"
                  >
                    <button v-if="isEditable" type="button" @click="event(item)">
                      <PencilSquareIcon class="w-6 text-xs text-blue-500" />
                    </button>
                    <button v-if="isDeletable" type="button" @click="editEvent(item)">
                      <TrashIcon class="w-6 text-xs text-red-500" />
                    </button>
                    <button v-if="isOpenable" type="button" @click="editEvent(item)">
                      <FolderOpenIcon class="w-6 text-xs text-red-500" />
                    </button>
                    <div v-if="actions.length >= 1">
                      <button
                        v-for="action in actions"
                        :key="action.label"
                        :class="`rounded-md border border-gray-300  py-2 px-4 text-sm font-medium text-white
                          mr-3 shadow-sm hover:bg-[#12428A] focus:outline-none focus:ring-2 focus:ring-indigo-500
                          focus:ring-offset-2 ${action.type}`"
                        type="button"
                        @click="action.callback()"
                      >
                        {{ action.label }}
                      </button>
                    </div>
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

<script lang="ts">
export default {
  name: "TheDataTable",
};
</script>

<style  scoped>
/* .primary {
  @apply bg-[#00416A] hover:bg-[#00385A];
}

.secondary {
  @apply bg-green-premo;
}

.info {
  @apply bg-gray-500 text-black;
} */
</style>
