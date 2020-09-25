<template>
  <div class="wrapper-store">

    <StoreItem
        :Jeans="Jeans"
        :Twists="Twists"
        :newArrayBacket="newArrayBacket"
    />

  </div>
</template>

<script>
import StoreItem from "@/components/Body/StoreItem/StoreItem";

export default {
  name: "Store",
  components: {
    StoreItem
  },
  props: ["Jeans", "Twists", "newArrayBacket"],


}
</script>

<style scoped>
.wrapper-store {
  padding: 40px;
  background-color: #999;
}

</style>