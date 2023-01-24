<script setup>
// ** Imports
import Navbar from "../components/Navbar.vue";
import SecendryHero from "../components/SecendryHero.vue";
import SecendryCard from "../components/SecendryCard.vue";
import Search from "../components/Search.vue";
import { useBranchesStore } from "../stores/branches";
import { ref, onBeforeMount, reactive } from "vue";
import { useRoute } from "vue-router";
import { useColorStore } from "../stores/cardInfo";

// ** Store
const { getData, getAllBranches, getSpecificBranches } = useBranchesStore();
const { getColor } = useColorStore();
// ** Router
const route = useRoute();

let dataItems = reactive({
  items: [],
  title: "",
});

// ** get branches

onBeforeMount(async () => {
  await getData(route.params.id, 1);
  const data = getAllBranches();

  // add data into data items
  dataItems.items = data.items;
  dataItems.title = data.title;
});

// ** search result

const search = searchText => {
  if (!searchText) {
    dataItems.items = getAllBranches().items;
  } else {
    dataItems.items = getSpecificBranches(searchText);
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
      <SecendryCard
        v-for="(item, index) in dataItems.items"
        :key="index"
        :item="item"
        :class="getColor()"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/style/cardsColors.scss";
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
