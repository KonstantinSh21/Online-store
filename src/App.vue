<template>
  <div>
    <div class="wrapper-header">
      <div class="wrapper-nav">
        <div class="nav name">OXYGEN</div>
        <Search class="search flex"/>
        <router-link class="nav flex" to="/">Главная</router-link>
        <router-link class="nav flex" to="/registration">Регистрация</router-link>
        <router-link class="nav flex" to="/basket">Корзина</router-link>
      </div>
    </div>
    <div class="wrapper-body">
      <div class="body">
        <router-view/>
      </div>

    </div>
  </div>
</template>

<script>
import Search from "@/components/Header/ Search/Search";

export default {
  name:"App",
  components: {
    Search
  }
}

</script>

<style>

.wrapper-header{
  max-width: 1470px;
  min-width: 100%;
  background-color: #cccccc;
  height: 130px;
}
.wrapper-nav{
  padding-top: 50px;
  justify-content: center;
  display: flex;
}

.nav {
  text-decoration: none;
  color: black;
}
.search{
  height: 30px;
  width: 25%;
  background-color: #fff;
}

.wrapper-body{
  min-width: 100%;
  background-color: #cccccc;
}

.body{
  margin: 0 auto;
  max-width: 1470px;
}



</style>
