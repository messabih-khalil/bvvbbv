<script setup>
// ** Imports
import searchIcon from "../assets/images/search.png";
import { ref, watch } from "vue";

// **

let inputData = ref("");

// ** watch input data

watch(
  () => inputData.value,
  (newData, _) => {
    emit("inputDataEmiter", newData);
  }
);

// ** emit data to parent component

const emit = defineEmits(["inputDataEmiter"]);
</script>

<template>
  <div class="search">
    <div class="search-input">
      <input type="text" placeholder="Chercher ..." v-model="inputData" />
      <img :src="searchIcon" alt="" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.search {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
  .search-input {
    display: flex;
    align-items: center;
    background-color: white;
    padding: 0.5rem;
    border-radius: 10px;
    width: 500px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

    input {
      width: 100%;
      height: 100%;
      padding: 0.5rem;
      font-size: 18px;
      margin-right: 0.5rem;
      background-color: transparent;
      border: none;
      outline: none;
    }

    img {
      width: 30px;
    }
  }
}
</style>
