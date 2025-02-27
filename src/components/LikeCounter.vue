<script setup>
const Like = ref(0);

function increment() {
  Like++;
  document.getElementById("Like").innerText = `Total like: ${Like}`;
}
</script>

<template>
  <div class="flex justify-center items-center min-h-screen">
    <h1>SILAHKAN KLIK JIKA ANDA SUKA DENGAN HALAMAN INI</h1>
    <button @click="increment" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Like</button>
  </div>
</template>
