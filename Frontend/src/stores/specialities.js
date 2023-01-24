import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
export const useSpecilitiesStore = defineStore("specialities", () => {
  // states
  let data = ref([]);

  // methods
  const getData = async () => {
    await axios
      .get("http://0.0.0.0:8000/specialities")
      .then(response => (data = response.data));
  };

  // getters
  const getAllSpecialities = () => {
    return data;
  };

  const getSpecificSpecialities = searchText => {
    const searchResult = data.filter(
      item =>
        item["title"].toLowerCase().includes(searchText.toLowerCase()) ||
        item["description"].toLowerCase().includes(searchText.toLowerCase())
    );

    return searchResult;
  };

  
  return { getData, getAllSpecialities, getSpecificSpecialities };
});
