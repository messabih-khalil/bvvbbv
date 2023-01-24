import { ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import { useRouter } from "vue-router";

export const useBranchesStore = defineStore("branches", () => {
  // states
  let data = ref([]);

  const router = useRouter();
  // methods

  const getData = async (id, page = 1) => {
    await axios
      .get(`http://0.0.0.0:8000/speciality/${id}/branches?page=${page}`)
      .then(response => (data = response.data))
      .catch(err =>
        router.push({
          name: "home",
        })
      );
  };

  // getters

  const getAllBranches = () => {
    return data;
  };

  const getSpecificBranches = searchText => {
    const searchResult = data.items.filter(item =>
      item["title"].toLowerCase().includes(searchText.toLowerCase())
    );

    return searchResult;
  };

  return { getData, getAllBranches, getSpecificBranches };
});
