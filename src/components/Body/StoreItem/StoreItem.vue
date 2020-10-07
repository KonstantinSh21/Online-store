<template>
  <div>
    <WindowAmount
        v-if="openWindow"
        :catalog='catalog'
        :newArrayBacket='newArrayBacket'
        :openWindow='openWindow'
        :itemClick='itemClick'

        @addBacket='addBacket'
        @exit='exit'
    />


    <div class="wrapper-storeItem">
      <div
          v-for="c in this.catalog"
          v-bind:key="c.id"
          v-bind:c="c"
          class="wrapper-item">
        <div class="item__wrapper">
          <img
              class="item__img"
              v-bind:src="c.img"
          />
          <div class="item__name">
            {{ c.name }}
          </div>
          <div class="item__price">
            {{ c.price }}
          </div>
          <button @click="openWindowAnoutn(c)" class="item__btn">
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
  components: {
    WindowAmount
  },
  props: ["catalog", "newArrayBacket"],

  data() {
    return {
      openWindow: false,
      itemClick: ''
    }
  },

  methods: {
    openWindowAnoutn(item) {
      this.openWindow = true
      this.itemClick = item
    },

    addBacket() {
      console.log(this.itemClick)
      if (this.itemClick.size === '') {
        alert("Вы не выбрали размер")
      } else {
        this.itemClick.backet = true
        this.openWindow = false
        this.newArrayBacket.push(this.itemClick)
        this.itemClick = ''
        console.log(this.newArrayBacket)
      }
    },
    exit() {
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

.item__wrapper {
  padding-top: 5px;
  margin: 0 auto;
  text-align: center;
}

.item__img {
  border-radius: 20px;
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