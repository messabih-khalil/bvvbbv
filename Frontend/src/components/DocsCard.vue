<script setup>
// ** Imports
import { useRouter } from "vue-router";
import logo from "../assets/images/logos/secendry-logo.png";

// **

const router = useRouter();

// ** Props

const props = defineProps(["item"]);
</script>

<template>
  <a class="card" :href="item.pdf_url" target="_blank">
    <p>
      {{ item.title }}
    </p>

    <img :src="logo" alt="" />
  </a>
</template>

<style lang="scss" scoped>
@import "../assets/style/card.scss";
@import "../assets/style/cardsColors.scss";


</style>
