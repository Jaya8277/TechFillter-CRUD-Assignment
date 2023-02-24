<script setup>
import useEmployee from "../../composables/crudApi";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
const { employeData, error, getSingleEmployee } = useEmployee();
const route = useRoute();
onMounted(() => {
  getSingleEmployee(route.params.id);
});
</script>

<template>
  <div class="shadow-md pb-6">
    <div
      class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg font-medium"
      role="alert"
      v-if="error"
    >
      Oops! Error encountered: {{ error.message }}
    </div>
    <table class="table-auto w-full" v-else-if="employeData">
      <thead class="bg-slate-600 text-white">
        <tr>
          <th class="py-1">ID</th>
          <th class="py-1">Name</th>
          <th class="py-1">age</th>
          <th class="py-1">Degination</th>
        </tr>
      </thead>
      <tbody class="text-center">
        <tr>
          <td class="py-2">{{ employeData.id }}</td>
          <td class="py-2">{{ employeData.name }}</td>
          <td class="py-2">{{ employeData.age }}</td>
          <td class="py-2">{{ employeData.degination }}</td>
        </tr>
      </tbody>
    </table>
    <div class="m-8 flex justify-center">
      <RouterLink :to="{ name: 'list' }">
        <button
          type="button"
          class="bg-emerald-700 text-white font-medium p-2 rounded-md hover:bg-emerald-800"
        >
          Back to Home
        </button>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped></style>
