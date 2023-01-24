<script setup>
// ** Imports
import { pushRout } from "../use/pushRoute";
import { useColorStore } from "../stores/cardInfo";
import { onBeforeUnmount } from "vue";
import { onBeforeRouteLeave } from "vue-router";
import logo from "../assets/images/logos/secendry-logo.png";
// ** Router

const { pushToNextRoute } = pushRout();

// ** Props

const props = defineProps(["item", "colorComp"]);

// ** Set Color

const { setColor, setHeroTitle } = useColorStore();

const cardAction = () => {
  setColor(props.colorComp);
  pushToNextRoute(props.item.id, "speciality");
};
</script>

<template>
  <div class="card" @click="cardAction">
    <p>{{ item.title }}</p>
    <span>
      {{ item.description }}
    </span>
    <img :src="logo" alt="" />
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/style/textSizes.scss";
.card {
  background-color: red;
  height: 300px;
  border-radius: 10px;
  padding: 3rem 2rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  p {
    font-size: $largeText;
    font-weight: 700;
    word-break: break-all;
    line-height: 40px;
    margin-bottom: 1rem;
    position: relative;
    z-index: 99999;
  }

  span {
    font-size: $xsText;
    z-index: 99999;
    position: relative;
  }

  img {
    width: 250px;
    position: absolute;
    bottom: -50px;
    right: 0;
    z-index: 2;
    opacity: .1;
  }
}
</style>
