<template>
  <div class="wrapper">
    <div class="wrapper-window">
      <div class="wrapper-window__item">
        <div class="wrapper-window__header">
          <div class="text__header">
            Выберите нужное количество товара и размер
          </div>
          <div class="exit" @click='$emit("exit")'>
            Назад
          </div>
        </div>

        <div class="wrapper-window__size">

          <div class="size">
            <button class="btn" style="border-left:1px solid #0d8bf2">
              Размер
            </button>
            <div class="dropdown-content">
              <div @click="addSize('XS')">XS</div>
              <div @click="addSize('S')">S</div>
              <div @click="addSize('L')">L</div>
              <div @click="addSize('XL')">XL</div>
              <div @click="addSize('XXL')">XXL</div>
              <div @click="addSize('XXXL')">XXXL</div>
            </div>
          </div>

          <div class="amount">
            <div class="number-amount">
              <span>{{ itemClick.amount }}</span>
            </div>
            <div class="number-redactor">
              <div class="redactor" @click='musicNumber'>
                Убавить
              </div>
              <div class="redactor" @click='plusNumber'>
                Добавить
              </div>
            </div>
          </div>
        </div>
        <div class="info">
                <span v-if="itemClick.name !== ''">
                    Вы заказываете {{ itemClick.name }},
                </span> размером {{ itemClick.size }}. {{ itemClick.amount }} штук

          <button @click="$emit('addBacket' )">
            Добавить в корзину
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "WindowAmount",
  props: [
    'openWindow',
    'newArrayBacket',
    'catalog',
    'itemClick'
  ],
  methods: {
    addSize(size) {
      this.itemClick.size = size
    },
    musicNumber() {
      if (this.itemClick.amount === 1) {
        alert('Нельзя заказать меньше 1')
      } else {
        this.itemClick.amount = this.itemClick.amount - 1
      }
      console.log(this.itemClick.amount)
    },
    plusNumber() {
      this.itemClick.amount = this.itemClick.amount + 1
      console.log(this.itemClick.amount)
    },
  },
}
</script>

<style>
.wrapper {
  position: absolute;
  top: -160px;
  left: -25%;
  width: 150%;
  height: 130%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
}

.wrapper-window {
  position: relative;
  height: 40%;
  width: 40%;
  text-align: center;
  margin: 0 auto;
  background-color: #fff;

}

.wrapper-window__item {
  margin-top: 400px;
  padding: 10px;
}

.wrapper-window__header {
  position: relative;
  padding-top: 20px;
}

.text__header {
  font-size: 20px;
}

.exit {
  top: 10px;
  right: 10px;
  position: absolute;
  display: inline-block;
  background-color: #ccc;
  padding: 5px;
}

.exit:hover {
  background-color: red;
}

.wrapper-window__size {
  padding-top: 40px;
  display: flex;
}

.size {
  width: 50%;
}

.btn {
  background-color: #2196F3;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  outline: none;
  min-width: 160px;
}

.dropdown-content {
  cursor: pointer;
  left: 16.5%;
  position: absolute;
  display: none;
  background-color: #f1f1f1;
  min-width: 160px;
  z-index: 1;
}

.dropdown-content div {
  cursor: pointer;
  color: black;
  padding: 12px 16px;
  display: block;
}

.dropdown-content div:hover {
  background-color: #ddd
}

.size:hover .dropdown-content {
  display: block;
}

.amount {
  width: 50%;
}

.number-amount {
  margin: 0 auto;
  background-color: #2196F3;
  width: 25%;
  height: 50px;
  position: relative;
}

.number-amount span {
  line-height: 50px;
  color: #fff;
  font-size: 30px;
  font-weight: bold;
}

.number-redactor {
  margin-top: 10px;
  display: flex;
  justify-content: space-evenly;
}

.redactor {
  cursor: pointer;
  background-color: #f1f1f1;;
  height: 40px;
  width: 25%;
}

.redactor:hover {
  background-color: #ccc;
}

.info {
  font-size: 20px;
  padding-top: 160px;
}

.info button {
  cursor: pointer;
  margin-top: 40px;
  width: 60%;
  font-size: 30px;
  height: 60px;
  background-color: #2196F3;
  color: #fff;
  border: none;
}

.info button:hover {
  background-color: #216599;
}

</style>