<script setup>
// ** Imports
import Navbar from "../components/Navbar.vue";
import SecendryHero from "../components/SecendryHero.vue";
import DocsCard from "../components/DocsCard.vue";
import Search from "../components/Search.vue";
import { useDocsStore } from "../stores/docs";
import { reactive, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import { useColorStore } from "../stores/cardInfo";

// ** Store
const { getData, getAllDocs, getSpecificDocs } = useDocsStore();

const { getColor } = useColorStore();

// ** Router
const route = useRoute();

let dataItems = reactive({
  items: [],
  title: "",
});

// ** get docs

onBeforeMount(async () => {
  await getData(route.params.id, 1);
  const data = getAllDocs();

  // add data into data items
  dataItems.items = data.items;
  dataItems.title = data.title;
});

// ** search result

const search = searchText => {
  if (!searchText) {
    dataItems.items = getAllDocs().items;
  } else {
    dataItems.items = getSpecificDocs(searchText);
  }
};
</script>

<template>
  <div>
    <!-- navbar -->
    <Navbar />
    <!-- hero -->
    <SecendryHero :title="dataItems.title" :backgroundColor="getColor()" />
    <!-- Search -->
    <Search @inputDataEmiter="data => search(data)" />
    <!-- cards -->
    <div class="cards">
      <DocsCard
        v-for="(item, index) in dataItems.items"
        :key="index"
        :item="item"
        :class="getColor()"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/style/mediaQueryMixins.scss";
.cards {
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  // media query
  @include laptopScreen {
    margin-left: 0;
    grid-template-columns: repeat(3, 1fr);
  }

  @include tabletScreen {
    grid-template-columns: repeat(2, 1fr);
  }

  @include mobileScreen {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
