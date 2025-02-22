<script setup>
import Judul from "../components/Judul.vue";
</script>

<template>
  <!-- Main Content -->

  <div class="bg-white rounded-lg shadow-sm p-6">
    <div class="flex justify-center items-center">
      <Judul judul="Welcome to Home" />
    </div>

    <!-- Example Content Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      <div class="bg-gradient-to-br from-indigo-600 to-indigo-700 p-6 rounded-lg shadow-sm text-white">
        <h3 class="text-lg font-semibold mb-2">Total Users</h3>
        <p class="text-3xl font-bold">1,234</p>
      </div>
      <div class="bg-gradient-to-br from-purple-600 to-purple-700 p-6 rounded-lg shadow-sm text-white">
        <h3 class="text-lg font-semibold mb-2">Revenue</h3>
        <p class="text-3xl font-bold">$45,678</p>
      </div>
      <div class="bg-gradient-to-br from-pink-600 to-pink-700 p-6 rounded-lg shadow-sm text-white">
        <h3 class="text-lg font-semibold mb-2">Active Projects</h3>
        <p class="text-3xl font-bold">25</p>
      </div>
    </div>
  </div>
</template>
