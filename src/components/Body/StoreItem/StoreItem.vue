<template>
  <div>
    <WindowAmount
     v-if="openWindow"
     :Jeans='Jeans'
     :Twists='Twists'
     :newArrayBacket='newArrayBacket'
     :openWindow='openWindow'
     :itemClick = 'itemClick'

     @addBacket='addBacket'
     @exit='exit'
     />

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
          <button @click="openWindowAnoutn(Jean)" class="item__btn">
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
        <button @click="openWindowAnoutn(Twist)" class="item__btn">
          Добавить в корзину
        </button>
      </div>
    </div>
  </div>
</div>

</template>

<script>
import WindowAmount from "@/components/Body/WindowAmount/WindowAmount"

export default {
  name: "StoreItem",
  components:{
    WindowAmount
  },
  props: ["Twists", "Jeans", "newArrayBacket"],

  data(){
    return{
      openWindow : false,
      itemClick: ''
    }
  },
  
  methods:{
      openWindowAnoutn(item){
        this.openWindow = true
        this.itemClick = item
      },

      addBacket(){
        console.log(this.itemClick)
            if(this.itemClick.size === ''){
                alert("Вы не выбрали размер")
            }else {
                this.itemClick.backet = true
                this.openWindow = false
                this.newArrayBacket.push(this.itemClick)
                this.itemClick=''
                console.log(this.newArrayBacket)
            }
        },
        exit(){
          this.openWindow = false
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
  border-radius: 10px;
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
  font-weight: 700;
  color: white;
  text-decoration: none;
  padding: .8em 1em calc(.8em + 3px);
  border-radius: 3px;
  background: rgb(64,199,129);
  box-shadow: 0 -3px rgb(53,167,110) inset;
  transition: 0.2s;
  border: none;
}

</style>