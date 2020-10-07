<template>
  <div class="wrapper-store">
    <h1>Каталог</h1>
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
  display: block;
  position: relative;
  padding: 40px;
  background-color: #0d8bf2;
  border-radius: 20px;
  margin-bottom: 150px;
}

.wrapper-store h1 {

  color: white;
  text-align: center;

}
</style>