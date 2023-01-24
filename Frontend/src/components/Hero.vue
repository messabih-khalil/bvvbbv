<script setup>
// ** Imports
import heroImage from "@/assets/images/heroimage.png";
</script>

<template>
  <div class="hero">
    <div class="hero-text">
      <h1>Documents de<br />Spécialités</h1>
      <p>
        trouver de nombreux cours et <br />
        examens pour différentes
        <br />
        spécialités
      </p>
    </div>

    <div class="hero-image">
      <img :src="heroImage" alt="" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/style/colors.scss";
@import "../assets/style/textSizes.scss";
@import "../assets/style/mediaQueryMixins.scss";

.hero {
  width: 100%;
  background-color: $mainColor;
  display: flex;
  position: relative;
  border-radius: 20px;
  height: 480px;
  overflow: hidden;
  .hero-text {
    width: 50%;
    padding: 4rem;
    @include tabletScreen {
      width: 100%;
    }
    h1 {
      font-size: $bigText;
      line-height: 70px;
      color: $secendryColor;
      @include mobileScreen {
        font-size: 2.1rem;
        line-height: 50px;
      }
    }

    p {
      font-size: $smallText;
      margin-top: 2rem;
      color: $heroText;
    }
  }

  .hero-image {
    position: absolute;
    right: 0;
    bottom: -5px;
    width: 750px;

    // media query
    @include laptopScreen {
      width: 500px;
    }

    @include tabletScreen {
      display: none;
    }
  }
}
</style>
