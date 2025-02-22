<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const isOpen = ref(false);

const navigationItems = [
  { path: "/", label: "Dashboard", icon: "📊" },
  { path: "/analytics", label: "Analytics", icon: "📈" },
  { path: "/customers", label: "Customers", icon: "👥" },
  { path: "/settings", label: "Settings", icon: "⚙️" },
];

const toggleSidebar = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <div>
    <!-- Improved Hamburger Button -->
    <button
      @click="toggleSidebar"
      class="lg:hidden fixed top-4 left-4 z-50 p-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-indigo-500/25"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white transform transition-transform duration-300" :class="{ 'rotate-90': isOpen }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>

    <!-- Enhanced Sidebar -->
    <div
      :class="`bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 h-screen w-80 fixed top-0 left-0 z-40 
      transition-all duration-500 transform shadow-2xl border-r border-indigo-900/20
      ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`"
    >
      <!-- Improved Sidebar Header -->
      <div class="flex items-center space-x-4 px-6 py-8 border-b border-indigo-800/30">
        <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg">
          <span class="text-white text-xl font-bold">A</span>
        </div>
        <div>
          <h1 class="text-white text-xl font-bold">Admin Panel</h1>
          <p class="text-indigo-300 text-sm">Welcome back!</p>
        </div>
      </div>

      <!-- Enhanced Navigation Menu -->
      <nav class="mt-6 px-4">
        <div class="space-y-2">
          <RouterLink
            v-for="item in navigationItems"
            :key="item.path"
            :to="item.path"
            class="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white rounded-xl transition-all duration-300 group hover:bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-transparent hover:border-indigo-700/50"
          >
            <span class="text-xl group-hover:scale-110 transition-transform duration-300">{{ item.icon }}</span>
            <span class="font-medium">{{ item.label }}</span>
          </RouterLink>
        </div>
      </nav>

      <!-- Enhanced User Profile Section -->
      <div class="absolute bottom-0 left-0 right-0 p-4">
        <div class="flex items-center space-x-4 bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-xl p-4 backdrop-blur-sm border border-indigo-800/30">
          <img src="https://ui-avatars.com/api/?name=John+Doe&background=6366f1&color=fff" class="w-12 h-12 rounded-xl shadow-lg border-2 border-indigo-500/50" alt="Profile" />
          <div>
            <h3 class="text-white font-medium">John Doe</h3>
            <p class="text-indigo-300 text-sm">Administrator</p>
          </div>
          <button class="ml-auto text-indigo-300 hover:text-white transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Improved Overlay -->
    <div v-if="isOpen" @click="toggleSidebar" class="fixed inset-0 bg-slate-900/60 z-30 lg:hidden backdrop-blur-sm transition-all duration-500"></div>
  </div>
</template>
