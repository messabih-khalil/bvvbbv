<script setup>
// ** Imports
import bottomImage from "../assets/images/bottom.png";
import topImage from "../assets/images/top.png";
// ** Props

const props = defineProps(["title", "backgroundColor"]);
</script>

<template>
  <div class="hero" :class="backgroundColor">
    <img :src="topImage" alt="" class="top-image" />
    <img :src="bottomImage" alt="" class="bottom-image" />
    <div class="hero-text">
      <p>{{ title }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/style/colors.scss";
@import "../assets/style/textSizes.scss";
@import "../assets/style/cardsColors.scss";
@import "../assets/style/mediaQueryMixins.scss";
.hero {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 20px;
  height: 480px;
  overflow: hidden;
  margin-bottom: 2rem;
  text-align: center;
  .hero-text {
    p {
      font-size: $smallText;
      font-size: 2.5rem;
      font-weight: 700;
      text-transform: capitalize;
    }
  }

  img {
    position: absolute;
    width: 100%;
    opacity: 0.6;
    @include mobileScreen {
      width: 170%;
    }
    &.top-image {
      top: -300px;
      // media query
      @include laptopScreen {
        top: -100px;
      }
      @include tabletScreen {
        top: -10px;
      }
    }
    &.bottom-image {
      bottom: -320px;
      // media query
      @include laptopScreen {
        bottom: -100px;
      }
      @include tabletScreen {
        bottom: -10px;
      }
    }
  }
}
</style>
