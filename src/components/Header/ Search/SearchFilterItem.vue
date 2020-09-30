<template>
  <div class="wrapper-search-filter-item">
    <div v-if="this.$props.searchItemArr ===  ['1']">
      К сожадение ничего не найдено...
    </div>
    <div v-else>
      {{this.$props.searchItemArr }}213
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchFilterItem",
  props: ['searchItemArr']
}
</script>

<style scoped>
.wrapper-search-filter-item{
  margin: 0 auto;
  padding-bottom:150px;
  width: 77.8%;
  background-color: #555;
}

</style>