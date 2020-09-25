<template>
  <div>
    <Store
        v-bind:Twists="Twists"
        v-bind:Jeans="Jeans"
        v-bind:newArrayBacket="newArrayBacket"
    />
  </div>
</template>


<script>
import Store from "@/components/Body/Store/Store";

export default {
  name: "StoreWrapper",
  components: {Store},
  props:["newArrayBacket", "Jeans", "Twists"]
}
</script>

<style scoped>

</style>