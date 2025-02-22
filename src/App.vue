<script setup>
import { ref } from "vue";
import { RouterView } from "vue-router";
import Sidebar from "./components/Sidebar.vue";

const isMobileMenuOpen = ref(false);
const isProfileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const toggleProfileMenu = () => {
  isProfileMenuOpen.value = !isProfileMenuOpen.value;
};

const notifications = [
  { id: 1, text: "New message received", time: "5m ago" },
  { id: 2, text: "Your report is ready", time: "1h ago" },
  { id: 3, text: "Meeting reminder", time: "3h ago" },
];
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Sidebar -->
    <Sidebar :is-open="isMobileMenuOpen" @toggle="toggleMobileMenu" />

    <!-- Main Content -->
    <div class="lg:ml-80 min-h-screen transition-all duration-300" :class="{ 'blur-sm': isMobileMenuOpen }">
      <!-- Header -->
      <header class="sticky top-0 z-30 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div class="px-4 sm:px-6 lg:px-8 py-4">
          <div class="flex items-center justify-between">
            <!-- Left side -->
            <div class="flex items-center">
              <button @click="toggleMobileMenu" class="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <h1 class="ml-3 text-xl font-semibold text-gray-800">Dashboard</h1>
            </div>

            <!-- Right side -->
            <div class="flex items-center space-x-4">
              <!-- Notifications -->
              <div class="relative">
                <button @click="isProfileMenuOpen = false" class="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                  <span class="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
                </button>
              </div>

              <!-- Profile Dropdown -->
              <div class="relative">
                <button @click="toggleProfileMenu" class="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 transition-all duration-300">
                  <img src="https://ui-avatars.com/api/?name=John+Doe&background=6366f1&color=fff" class="w-8 h-8 rounded-lg" alt="Profile" />
                  <span class="hidden sm:block text-sm font-medium text-gray-700">John Doe</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 transform transition-transform duration-300" :class="{ 'rotate-180': isProfileMenuOpen }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <!-- Profile Dropdown Menu -->
                <div v-if="isProfileMenuOpen" class="absolute right-0 mt-2 w-48 rounded-lg bg-white py-2 shadow-lg ring-1 ring-black ring-opacity-5">
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Your Profile</a>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <!-- Main Content Area -->
      <main class="p-4 sm:p-6 lg:p-8">
        <RouterView />
      </main>
    </div>
  </div>
</template>
