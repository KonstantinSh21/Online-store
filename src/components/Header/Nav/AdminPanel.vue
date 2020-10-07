<template>
  <div class="wrapper_registration">
    <h1 class="item__password">Панель администратора</h1>
    <div class="item__password_input_btn" v-if="checkDone">
      <h2>Введите пароль:</h2>
      <input v-model="password" type="text">
      <button @click="checkPassword">Ввести</button>
    </div>

    <div v-else>
      <div>
        <div>
          <h2>
            Добавить новый товар
          </h2>
          <div class="create-new-item">
            <button @click="addNewCategoriesOpen">
              <span v-if='nameNewCategories === "" || newName=== "" || newPrice==="" || newImg ===""'>Создать</span>
              <span v-else>Закрыть</span>
            </button>
          </div>
        </div>

        <div class="input_group" v-show="addNewCategoriesBool">
          <input v-model="nameNewCategories" placeholder="Название категории">
          <input v-model="newName" placeholder="Название  товара">
          <input v-model="newPrice" placeholder="Цена товара">
          <input v-model="newDender" placeholder="Пол">
          <input v-model="newImg" placeholder="Картинка">

          <button
              @click="$emit('addNewCategories', nameNewCategories,  newName, newPrice, newDender, newImg)">
            Добавить
          </button>
        </div>

        <AdminRedactorItem
            :transferRedactItem='transferRedactItem'
            :redactorItem='redactorItem'
            v-show='stateRedactorItem'
            :stateRedactorItem='stateRedactorItem'
            :deleteItemTransformAdminPanel="deleteItemTransformAdminPanel"
        />
        <h1>
          Предсмотр каталога:
        </h1>

        <div class="wrapper-storeItem">
          <div
              v-for='item in catalog'
              :item='item'
              :key="item.id"
              class="wrapper-item"
          >
            <div class="item__wrapper">
              <div @click='openRedactorItem(item)' class="item_redactor">
                ред
              </div>
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
              <button class="item__btn">
                Добавить в корзину
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AdminRedactorItem from '@/components/Header/Nav/AdminRedactorItem/AdminRedactorItem'

export default {
  name: 'AdminPanel',
  props: ['catalog', 'redactItemFunc', 'deleteItemTransform'],
  components: {
    AdminRedactorItem
  },

  data() {
    return {
      password: '',
      checkDone: true,
      addNewCategoriesBool: false,
      nameNewCategories: '',
      newName: '',
      newPrice: '',
      newDender: '',
      newImg: '',
      redactorItem: {},
      stateRedactorItem: false
    }
  },

  methods: {
    deleteItemTransformAdminPanel(value) {
      this.stateRedactorItem = !this.stateRedactorItem
      this.$props.deleteItemTransform(value)
    },

    transferRedactItem(item) {
      this.stateRedactorItem = !this.stateRedactorItem
      this.$props.redactItemFunc(item)
    },

    checkPassword() {
      if (this.password === "1234") {
        this.checkDone = !this.checkDone
        this.password = ''
      } else {
        console.log('none')
      }
    },

    addNewCategoriesOpen() {
      this.addNewCategoriesBool = !this.addNewCategoriesBool
      this.nameNewCategories = ''
      this.newName = ''
      this.newPrice = ''
      this.newDender = ''
      this.newImg = ''
    },

    openRedactorItem(item) {
      this.redactorItem = item
      this.stateRedactorItem = !this.stateRedactorItem
      item = {}
    }
  }
}
</script>

<style>
.wrapper_registration{
  margin: 0 auto;
  text-align: center;
  background-color: #0d8bf2;
  border-radius: 25px;
  color: white;
}
.item__password{
  padding-top: 40px;
  padding-bottom: 20px;
  font-size: 20px;
}
.item__password_input_btn{
  padding-bottom: 40px;
}
.item__password_input_btn input{
  width: 15%;
  height: 25px;
  border: 2px solid #76bbef;
}
.item__password_input_btn button{
  background-color: #fff;
  height: 31px;
  border-top: 2px solid #76bbef;
  border-bottom: 2px solid #76bbef;
  border-right: 2px solid #76bbef;
  text-align: center;
  font-size: 16px;
}

.item__password_input_btn button:hover{
  background-color: #216599;
  color: white;
}

.wrapper-storeItem {
  position: relative;
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
  position: relative;
}

.item_redactor {
  position: absolute;
  top: 0;
  left: 90%;
  height: 25px;
  width: 25px;
  border-radius: 100%;
  background-color: green;
  cursor: pointer;
}

.item__img {
  height: 150px;
}
.create-new-item button{
  background-color: #fff;
  border: 2px solid #0d8bf2;
}
.create-new-item:hover{
  color: #fff;
}

.item__name {
  color: #000;
  padding-top: 10px;
}

.item__price {
  color: #000;
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

.input_group{
  padding: 20px;
}
</style>
