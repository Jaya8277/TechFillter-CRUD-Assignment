<script setup>
import { reactive } from "vue";
import { RouterLink } from "vue-router";
import useEmployee from "../../composables/crudApi";
const { empdata, error, statusCode, createEmp } = useEmployee();
const formData = reactive({
  name: "",
  age: "",
  degination:""
});
const handleAddEmployeeForm = async () => {
  await createEmp(formData);
  if (statusCode.value === 201) {
    document.getElementById("AddEmployeeForm").reset();
  }
};
</script>

<template>
  <div class="shadow-md pb-6">
    <div class="bg-indigo-600 p-4">
      <h1 class="text-3xl font-bold text-center text-white">Add Employee</h1>
    </div>

    <form
      @submit.prevent="handleAddEmployeeForm"
      class="w-full"
      id="AddEmployeeForm"
    >
      <div class="flex items-center m-6">
        <div class="w-1/5">
          <label class="font-medium" for="name"> Name : </label>
        </div>
        <div class="w-4/5">
          <input
            type="text"
            id="name"
            v-model.trim="formData.name"
            class="border-2 border-gray-200 w-full py-2 px-4"
            placeholder="Enter your name"
            required
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
            v-model.trim="formData.age"
            class="border-2 border-gray-200 w-full py-2 px-4"
            placeholder="Enter your age"
            required
          />
        </div>

      </div>

      <div class="flex items-center m-6">
        <div class="w-1/5">
          <label class="font-medium" for="degination"> Degination : </label>
        </div>
        <div class="w-4/5">
          <input
            type="degination"
            id="degination"
            v-model.trim="formData.degination"
            class="border-2 border-gray-200 w-full py-2 px-4"
            placeholder="Enter your degination"
            required
          />
        </div>

      </div>
      <div class="m-8 flex justify-center">
        <button
          type="submit"
          class="bg-purple-700 text-white font-medium py-2 rounded-md px-6 hover:bg-purple-800 mr-6"
        >
          Add
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
      v-if="error"
    >
      Oops! Error encountered: {{ error.message }}
    </div>
    <div
      class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg font-medium"
      role="alert"
      v-if="statusCode === 201"
    >
      Employee Added Successfully
    </div>
  </div>
</template>

<style scoped></style>
