<template>
  <div class="wrapper-store">
    <StoreItem
        :catalog="catalog"
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
  props: ["catalog", "newArrayBacket"],


}
</script>

<style scoped>
.wrapper-store {
  padding: 40px;
  background-color: #999;
}

</style>