<template>
  <div class="wrapper-search-filter-item">
    <div
        v-for='item in this.$props.searchItemArr'
        :key=item.id
        class="wrapper_item"
    >
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
      </div>
    </div>
    <button class="item-btn" @click='$emit("closeSearch")'>
      Закрыть
    </button>shikhov@lpmotor.ru
  </div>
</template>

<script>
export default {
  name: "SearchFilterItem",
  props: ['searchItemArr']
}
</script>

<style scoped>
.wrapper-search-filter-item {
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 80%;
}

.wrapper_item {
  padding: 10px;
  margin: 10px;
  flex: 0 0 186px;
}

.item__wrapper {
  border-radius: 10px;
  padding: 15px;
  background-color: #fff;
  height: 280px;
  border: 1px solid #000;
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

.item-btn {
  width: 100px;
  height: 20px;
}
</style>