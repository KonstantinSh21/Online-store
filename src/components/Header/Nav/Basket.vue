<template>
  <div class="wrapper-basket">

    <div
        v-for="(item) in newArrayBacket"
        v-bind:key="item.id"
        v-bind:item="item"
        class="wrapper-item">
      <div class="item__wrapper">
        <img
            class="item__img"
            v-bind:src="item.img"
        />
        <div class="item__name">
          {{ item.name }}
        </div>
        <div class="item__price">
          {{ item.price }}
        </div>
        <button class='item__btn' @click="delItem(item.id)">
          Удалить
        </button>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'Basket',
  props: ['newArrayBacket'],
  methods:{
    delItem(id){






      // for(let i = 0; i < this.$props.newArrayBacket.length; i++){
      //   // console.log(this.$props.newArrayBacket[i].id)
      //   if(this.$props.newArrayBacket[i].id === id){
      //     let c = this.$props.newArrayBacket
      //     let a = c.slice(0, i--)
      //     let b = c.slice(i++)
      //     c = [...a, ...b]
      //     c = this.$props.newArrayBacket
      //     console.log(this.$props.newArrayBacket)
      //   }
      // }
    }
  }
}
</script>
<style scoped>
.wrapper-basket {
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
