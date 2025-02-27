<script setup>
import { ref } from "vue";
import Judul from "../components/Judul.vue";

const nilai = ref([
  { nama: "Budi", nilai: 80 },
  { nama: "Siti", nilai: 90 },
  { nama: "Rudi", nilai: 70 },
]);

const selectedNilai = ref({ nama: "", nilai: 0 });
const isOpen = ref(false);
const isAddOpen = ref(false);

function editNilai(item) {
  selectedNilai.value = { ...item };
  isOpen.value = true;
}

function updateNilai() {
  const index = nilai.value.findIndex((item) => item.nama === selectedNilai.value.nama);
  if (index !== -1) {
    nilai.value.splice(index, 1, { ...selectedNilai.value });
  }
  nilai.value = [...nilai.value];
  nilai.value = [...nilai.value];
  isOpen.value = false;
}

function addNilai() {
  if (selectedNilai.value.nama && selectedNilai.value.nilai) {
    selectedNilai.value = { nama: "", nilai: 0 };
  }
  isAddOpen.value = true;
}

function createNilai() {
  nilai.value.push({ ...selectedNilai.value });

  isAddOpen.value = false;
  alert("Nilai berhasil ditambahkan");
}
</script>

<template>
  <div class="bg-white rounded-lg shadow-sm p-6">
    <div class="flex justify-between items-center">
      <Judul judul="Nilai" />
      <button @click="addNilai" class="text-white px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-700">Tambah Nilai</button>
    </div>

    <div class="mt-8">
      <table class="w-full">
        <thead>
          <tr>
            <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider">No</th>
            <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider">Nama</th>
            <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider">Nilai</th>
            <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in nilai" :key="index" class="hover:bg-gray-100">
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-300">{{ index + 1 }}</td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-300">{{ item.nama }}</td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-300">{{ item.nilai }}</td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
              <button @click="editNilai(item)" class="text-white px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-700">Edit</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="fixed inset-0 flex items-center justify-center" v-if="isOpen">
    <div class="bg-white rounded-lg shadow-sm p-6 w-1/2">
      <div class="flex justify-between items-center">
        <h3 class="text-lg font-semibold">Edit Nilai</h3>
        <button @click="isOpen = false" class="text-gray-600 hover:text-gray-900">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <form @submit.prevent="updateNilai" class="mt-8">
        <div class="mb-6">
          <label for="nama" class="block text-sm font-medium leading-5 text-gray-700">Nama</label>
          <input type="text" id="nama" v-model="selectedNilai.nama" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
        </div>

        <div class="mb-6">
          <label for="nilai" class="block text-sm font-medium leading-5 text-gray-700">Nilai</label>
          <input type="number" id="nilai" v-model="selectedNilai.nilai" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
        </div>

        <button
          type="submit"
          class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out"
        >
          Update
        </button>
      </form>
    </div>
  </div>
  <div class="fixed inset-0 flex items-center justify-center" v-if="isAddOpen">
    <div class="bg-white rounded-lg shadow-sm p-6 w-1/2">
      <div class="flex justify-between items-center">
        <h3 class="text-lg font-semibold">Tambah Nilai</h3>
        <button @click="isAddOpen = false" class="text-gray-600 hover:text-gray-900">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <form @submit.prevent="createNilai" class="mt-8">
        <div class="mb-6">
          <label for="nama" class="block text-sm font-medium leading-5 text-gray-700">Nama</label>
          <input type="text" id="nama" v-model="selectedNilai.nama" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
        </div>

        <div class="mb-6">
          <label for="nilai" class="block text-sm font-medium leading-5 text-gray-700">Nilai</label>
          <input type="number" id="nilai" v-model="selectedNilai.nilai" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
        </div>

        <button
          type="submit"
          class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out"
        >
          Tambah
        </button>
      </form>
    </div>
  </div>
</template>
