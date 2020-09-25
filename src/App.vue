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
        <router-view
            v-bind:Twists="Twists"
            v-bind:Jeans="Jeans"
            v-bind:newArrayBacket="newArrayBacket"
        />
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
  },

  data() {
    return {
      Twists: [
        {
          name: "Дешевая мужская куртка",
          gender: "men",
          id: 1,
          basket: false,
          price: 3200,
          img: "data:image/jpeg;base64,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"
        },
        {
          name: "Обычная мужская куртка",
          id: 2,
          gender: "men",
          basket: false,
          price: 5200,
          img: "data:image/jpeg;base64,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"
        },
        {
          name: "Обычная мужская куртка",
          id: 3,
          gender: "men",
          basket: false,
          price: 5900,
          img: "https://avatars.mds.yandex.net/get-zen_doc/1209300/pub_5c66b4d755507200af8566d3_5c66b564489d3e00aef1f9e9/scale_1200"
        },
        {
          name: "Дорогая мужская куртка",
          id: 4,
          gender: "men",
          basket: false,
          price: 12500,
          img: "https://avatars.mds.yandex.net/get-zen_doc/1209300/pub_5c66b4d755507200af8566d3_5c66b564489d3e00aef1f9e9/scale_1200"
        },
        {
          name: "Дешевая женская куртка",
          id: 5,
          gender: "women",
          basket: false,
          price: 3200,
          img: "https://avatars.mds.yandex.net/get-zen_doc/1209300/pub_5c66b4d755507200af8566d3_5c66b564489d3e00aef1f9e9/scale_1200"
        },
        {
          name: "Обычная женская куртка",
          id: 6,
          gender: "women",
          basket: false,
          price: 5200,
          img: "https://avatars.mds.yandex.net/get-zen_doc/1209300/pub_5c66b4d755507200af8566d3_5c66b564489d3e00aef1f9e9/scale_1200"
        },
        {
          name: "Обычная женская куртка",
          id: 7,
          gender: "women",
          basket: false,
          price: 5900,
          img: "https://avatars.mds.yandex.net/get-zen_doc/1209300/pub_5c66b4d755507200af8566d3_5c66b564489d3e00aef1f9e9/scale_1200"
        },
        {
          name: "Дорогая женская куртка",
          id: 8,
          gender: "women",
          basket: false,
          price: 12500,
          img: "https://avatars.mds.yandex.net/get-zen_doc/1209300/pub_5c66b4d755507200af8566d3_5c66b564489d3e00aef1f9e9/scale_1200"
        },
      ],
      Jeans: [
        {
          name: "Дешевые мужские джинсы",
          id: 9,
          gender: "men",
          basket: false,
          price: 600,
          img: "https://avatars.mds.yandex.net/get-zen_doc/1209300/pub_5c66b4d755507200af8566d3_5c66b564489d3e00aef1f9e9/scale_1200"
        },
        {
          name: "Средние мужские джинсы",
          id: 10,
          gender: "men",
          basket: false,
          price: 1500,
          img: "https://avatars.mds.yandex.net/get-zen_doc/1209300/pub_5c66b4d755507200af8566d3_5c66b564489d3e00aef1f9e9/scale_1200"
        },
        {
          name: "Дорогие мужские джинсы",
          id: 11,
          gender: "men",
          basket: false,
          price: 3200,
          img: "https://avatars.mds.yandex.net/get-zen_doc/1209300/pub_5c66b4d755507200af8566d3_5c66b564489d3e00aef1f9e9/scale_1200"
        },
        {
          name: "Дешевые женские джинсы",
          id: 12,
          gender: "women",
          basket: false,
          price: 1000,
          img: "https://avatars.mds.yandex.net/get-zen_doc/1209300/pub_5c66b4d755507200af8566d3_5c66b564489d3e00aef1f9e9/scale_1200"
        },
        {
          name: "Обычные женские джинсы",
          id: 13,
          gender: "women",
          basket: false,
          price: 2200,
          img: "https://avatars.mds.yandex.net/get-zen_doc/1209300/pub_5c66b4d755507200af8566d3_5c66b564489d3e00aef1f9e9/scale_1200"
        },
        {
          name: "Обычные женские джинсы",
          id: 14,
          gender: "women",
          basket: false,
          price: 2500,
          img: "https://avatars.mds.yandex.net/get-zen_doc/1209300/pub_5c66b4d755507200af8566d3_5c66b564489d3e00aef1f9e9/scale_1200"
        },
        {
          name: "Дорогие джинсы",
          id: 15,
          gender: "women",
          basket: false,
          price: 3700,
          img: "https://avatars.mds.yandex.net/get-zen_doc/1209300/pub_5c66b4d755507200af8566d3_5c66b564489d3e00aef1f9e9/scale_1200"
        },
      ],
      newArrayBacket:[
      ],
    }
  },


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
