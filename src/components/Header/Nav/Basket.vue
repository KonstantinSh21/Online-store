<template>
  <div class="wrapper-basket">
    <div
        v-for="(item, index) in newArrayBacket"
        v-bind:key="index"
        class="wrapper-item"
        v-bind:item="item">
      <div class="item__wrapper">
        <img
            class="item__img"
            v-bind:src="item.img"
        />
        <div class="item__name">
          {{ item.name }} <br/> {{ item.size }}
        </div>
        <div class="item__name">
          В количистве {{ item.amount }} штук
        </div>
        <div class="item__price">
          {{ item.price }}
        </div>
        <button class='item__btn' @click="$emit('delItem', item.id)">
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
  height: 320px;
}

.item__wrapper {
  padding-top: 5px;
  margin: 0 auto;
  text-align: center;
}

.item__img {
  height: 150px;
}

.item__name {
  padding-top: 10px;
}

.item__price {
  padding-top: 10px;
  font-size: 20px;
  font-weight: bold;
}

.item__btn {
  width: 100%;
  margin-top: 20px;
  height: 40px;
  font-weight: 700;
  color: white;
  text-decoration: none;
  padding: .8em 1em calc(.8em + 3px);
  border-radius: 3px;
  background: rgb(64, 199, 129);
  box-shadow: 0 -3px rgb(53, 167, 110) inset;
  transition: 0.2s;
  border: none;
}
</style>
