import { ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import { useRouter } from "vue-router";

export const useDocsStore = defineStore("docs", () => {
  // states
  let data = ref([]);


  const router = useRouter();
  // methods

  const getData = async (id, page = 1) => {
    await axios
      .get(`http://0.0.0.0:8000/branche/${id}/documnets?page=${page}`)
      .then(response => (data = response.data))
      .catch(err =>
        router.push({
          name: "home",
        })
      );
  };

  // getters

  const getAllDocs = () => {
    return data;
  };

  const getSpecificDocs = searchText => {
    const searchResult = data.items.filter(item =>
      item["title"].toLowerCase().includes(searchText.toLowerCase())
    );

    return searchResult;
  };
  return { getData, getAllDocs, getSpecificDocs };
});
