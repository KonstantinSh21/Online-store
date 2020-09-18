<template>
<div class="wrapper-store">
  <Slider
      v-bind:catalog="catalog"
  />
  Store
<!--  {{catalog}}-->
</div>
</template>

<script>
import Slider from "@/components/Body/Slider/Slider";
export default {
name: "Store",
  components: {Slider},
  props:["catalog"]
}
</script>

<style scoped>

</style>