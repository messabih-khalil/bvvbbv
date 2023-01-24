<template>
  <div class="left-panel">
    <p>Spécialités</p>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/style/colors.scss";
@import "../assets/style/mediaQueryMixins.scss";
.left-panel {
  width: 5%;
  background-color: $mainColor;
  writing-mode: vertical-rl;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  p {
    font-size: 26px;
    font-weight: 700;
    color: $secendryColor;
  }
  // media query 
  @include laptopScreen{
    display: none;
  }
}
</style>
