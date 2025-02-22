<script setup>
import Judul from "../../components/Judul.vue";

defineProps({
  message: String,
});
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <h1 class="text-5xl text-center font-bold text-red-900"><Judul judul="404 Not Found" /></h1>
    <p class="text-center text-gray-600">This is not a valid page</p>
  </div>
</template>
