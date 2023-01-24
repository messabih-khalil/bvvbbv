<script setup>
// ** Import Components

import Navbar from "../components/Navbar.vue";
import Hero from "../components/Hero.vue";
import LeftPanel from "../components/LeftPanel.vue";
import Card from "../components/Card.vue";
import Search from "../components/Search.vue";
import { ref, onMounted, onBeforeMount } from "vue";
import { useSpecilitiesStore } from "../stores/specialities";

// **

let dataItem = ref([]);

// ** Store

const { getData, getAllSpecialities, getSpecificSpecialities } =
  useSpecilitiesStore();

// ** get specialities

onBeforeMount(async () => {
  await getData();
  dataItem.value = getAllSpecialities();
});

// ** search result

const search = searchText => {
  if (searchText == "") {
    dataItem.value = getAllSpecialities();
  } else {
    dataItem.value = getSpecificSpecialities(searchText);
  }
};
</script>

<template>
  <div>
    <!-- navbar -->
    <Navbar />
    <!-- hero -->
    <Hero />

    <!-- body section -->
    <div class="body">
      <!-- left panel -->
      <LeftPanel />
      <!-- boxes -->
      <div class="right-side">
        <!-- search -->
        <Search @inputDataEmiter="data => search(data)" />
        <div class="boxes">
          <Card
            v-for="(item, index) in dataItem"
            :key="item.id"
            :item="item"
            :colorComp="'card-style-' + (index + 1)"
            :class="'card-style-' + (index + 1)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/style/textSizes.scss";
@import "../assets/style/cardsColors.scss";
@import "../assets/style/mediaQueryMixins.scss";
.body {
  margin-top: 4rem;
  display: flex;
  width: 100%;
  .right-side {
    width: 95%;
    // media query
    @include laptopScreen {
      width: 100%;
    }
    .boxes {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      margin-left: 2rem;
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
  }
}
</style>
