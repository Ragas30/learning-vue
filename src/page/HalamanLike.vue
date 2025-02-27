<script setup>
import { ref } from "vue";

const Like = ref(0);

function increment() {
  Like.value++;
}
</script>

<template>
  <div class="flex flex-col justify-center items-center min-h-screen">
    <h1 class="mb-4">SILAHKAN KLIK JIKA ANDA SUKA DENGAN HALAMAN INI</h1>
    <button @click="increment" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Like {{ Like }}</button>
  </div>
</template>

