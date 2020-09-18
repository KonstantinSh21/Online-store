<template>
  <div class="wrapper-slider">
    <div>
      <img v-bind:src="catalog.menClothes[0].Twists[1].img">
    </div>

  </div>
</template>

<script>
export default {
  name: "Slider",
  props:["catalog"]
}
</script>

<style scoped>
.wrapper-slider{
  margin: 0 auto;
  width: 100%;
  text-align: center;
}

</style>