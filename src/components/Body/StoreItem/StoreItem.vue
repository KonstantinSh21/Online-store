<template>
  <div class="wrapper-storeItem">
    <div
        v-for="(Jean) in this.Jeans"
        v-bind:key="Jean.id"
        v-bind:jean="Jean"
        class="wrapper-item">
      <div class="item__wrapper">
        <img
            class="item__img"
            v-bind:src="Jean.img"
        />
        <div class="item__name">
          {{Jean.name}}
        </div>
        <div class="item__price">
          {{Jean.price}}
        </div>
        <button @click="addBacket(Jean)" class="item__btn">
            Добавить в корзину
        </button>
      </div>
    </div>

    <div
        v-for="(Twist) in this.Twists"
        v-bind:key="Twist.id"
        v-bind:jean="Twist"
        class="wrapper-item">
      <div class="item__wrapper">
        <img
            class="item__img"
            v-bind:src="Twist.img"
        />
        <div class="item__name">
          {{Twist.name}}
        </div>
        <div class="item__price">
          {{Twist.price}}
        </div>
        <button @click="addBacket(Twist)" class="item__btn">
          Добавить в корзину
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StoreItem",
  props: ["Twists", "Jeans", "newArrayBacket"],
  methods:{
      addBacket(item){
        item.basket = true
        this.$props.newArrayBacket.push(item)
      }
  }
}
</script>

<style scoped>
.wrapper-storeItem {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.wrapper-item {
  padding: 10px;
  flex: 0 0 186px;
  background-color: #fff;
  margin: 10px;
  height: 280px;
}
.item__wrapper{
  padding-top: 5px;
  margin: 0 auto;
  text-align: center;
}
.item__img{
  height: 150px;
}
.item__name{
  padding-top: 10px;
}
.item__price{
  padding-top: 10px;
  font-size: 20px;
  font-weight: bold;
}
.item__btn{
  width: 100%;
  margin-top: 20px;
  height: 40px;

}

</style>