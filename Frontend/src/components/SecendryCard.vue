<script setup>
// ** Imports
import { pushRout } from "../use/pushRoute";
import logo from "../assets/images/logos/secendry-logo.png";

const { pushToNextRoute } = pushRout();

// ** Props

const props = defineProps(["item"]);


</script>

<template>
  <div class="card" @click="pushToNextRoute(item.id, 'docs')">
    <p>
      {{ item.title }}
    </p>

    <img :src="logo" alt="" />
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/style/card.scss";
</style>
