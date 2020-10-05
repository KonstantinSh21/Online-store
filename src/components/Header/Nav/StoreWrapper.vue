<template>
  <div>
    <Store
        v-bind:catalog="catalog"
        v-bind:newArrayBacket="newArrayBacket"
    />
  </div>
</template>


<script>
import Store from "@/components/Body/Store/Store";

export default {
  name: "StoreWrapper",
  components: {Store},
  props: ["newArrayBacket", "catalog"]
}
</script>

<style scoped>

</style>