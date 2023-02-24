<script setup>
import { onMounted } from "vue";
import useEmployee from "../../composables/crudApi";
import { useRoute } from "vue-router";
const { employeData, error, statusCode, getSingleEmployee, updateEmploye } =
  useEmployee();
const { params } = useRoute();
onMounted(() => {
  getSingleEmployee(params.id);
});

function handleUpdateEmployeForm() {
  updateEmploye(params.id, employeData.value);
}
</script>

<template>
  <div class="shadow-md pb-6">
    <div class="bg-indigo-600 p-4">
      <h1 class="text-3xl font-bold text-center text-white">Edit Employee</h1>
    </div>
    <div
      class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg font-medium"
      role="alert"
      v-if="error"
    >
      Oops! Error encountered: {{ error.message }}
    </div>
    <form
      @submit.prevent="handleUpdateEmployeForm"
      class="w-full"
      v-else-if="employeData"
    >
      <div class="flex items-center m-6">
        <div class="w-1/5">
          <label class="font-medium" for="stuid"> ID : </label>
        </div>
        <div class="w-4/5">
          <input
            type="text"
            id="stuid"
            class="border-2 border-gray-200 w-full py-2 px-4"
            readonly
            disabled
            v-model.trim="employeData.id"
          />
        </div>
      </div>
      <div class="flex items-center m-6">
        <div class="w-1/5">
          <label class="font-medium" for="name"> Name : </label>
        </div>
        <div class="w-4/5">
          <input
            type="text"
            id="name"
            class="border-2 border-gray-200 w-full py-2 px-4"
            required
            v-model.trim="employeData.name"
          />
        </div>
      </div>
      <div class="flex items-center m-6">
        <div class="w-1/5">
          <label class="font-medium" for="age"> age : </label>
        </div>
        <div class="w-4/5">
          <input
            type="age"
            id="age"
            class="border-2 border-gray-200 w-full py-2 px-4"
            required
            v-model.trim="employeData.age"
          />
        </div>
      </div>

      <div class="flex items-center m-6">
        <div class="w-1/5">
          <label class="font-medium" for="degination"> degination : </label>
        </div>
        <div class="w-4/5">
          <input
            type="degination"
            id="degination"
            class="border-2 border-gray-200 w-full py-2 px-4"
            required
            v-model.trim="employeData.degination"
          />
        </div>
      </div>

      <div class="m-8 flex justify-center">
        <button
          type="submit"
          class="bg-purple-700 text-white font-medium py-2 px-6 rounded-md hover:bg-purple-800 mr-5"
        >
          Save
        </button>
        <RouterLink :to="{ name: 'list' }">
          <button
            type="button"
            class="bg-emerald-700 text-white font-medium p-2 rounded-md hover:bg-emerald-800"
          >
            Back to Home
          </button>
        </RouterLink>
      </div>
    </form>

    <div
      class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg font-medium"
      role="alert"
      v-if="statusCode === 200"
    >
      Employee Updated Successfully
    </div>
  </div>
</template>

<style scoped></style>
