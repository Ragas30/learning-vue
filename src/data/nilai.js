import { defineStore } from "pinia";

export const useNilai = defineStore('nilai', () => {
    const nilai = ref([{}])
    const formData = ({})

    return{
        nilai,formData
    }
})