<template>
  <div class="wrapper-search">
    <input class="search" v-model="value" type="text" placeholder="Search">
    <div class="btn-search" @click="$emit('SearchItem', value)">Поиск</div>
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
.wrapper-search{
  display: flex;
  max-width: 20%;
}
.wrapper-search input{
  width: 85%;
  height: 30px;
  border: 2px solid #0d8bf2;
}

.btn-search{
  background-color: #fff;
  width: 15%;
  height: 32px;
  border-top: 2px solid #0d8bf2;
  border-bottom: 2px solid #0d8bf2;
  border-right: 2px solid #0d8bf2;
  line-height: 32px;
  text-align: center;

}

.btn-search:hover{
  background-color: #216599;
  color: white;
}

</style>