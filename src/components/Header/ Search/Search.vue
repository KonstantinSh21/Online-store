<template>
  <div>
    <input v-model="value" type="text" placeholder="Search"/>
    <div @click="$emit('SearchItem', value)">Поиск</div>
  </div>
</template>

<script>

export default {
  name: "Search",
  data() {
    return {
      value: '',
    }
  }
}
</script>

<style scoped>

</style>