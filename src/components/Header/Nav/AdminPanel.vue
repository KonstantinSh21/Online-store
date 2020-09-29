<template>
  <div class="wrapper_registration">
    <div>AdminPanel</div>
    <div v-if="checkDone">
      <input v-model="password" type="text">
      <button @click="checkPassword">Ввести</button>
    </div>

    <div v-else>
      <div>Проверка пройдена</div>
      <div>
        <div>
          Добавить новый товар:
        </div>

        <div>
          <div>
            Создать новыю катеригию
          </div>
          <div>
            <button @click="addNewCategoriesOpen">
              <span v-if='nameNewCategories === "" || newName=== "" || newPrice==="" || newImg ===""'>Создать</span>
              <span v-else>Закрыть</span>
            </button>
          </div>
        </div>

        <div v-show="addNewCategoriesBool">
            <div>
              Какое будет название у ващей новой категории, пожалйстава введите ее на англиском языке
            </div>
            <input v-model="nameNewCategories" placeholder="Название категории">
            <input v-model="newName" placeholder="Название первого товара">
            <input v-model="newPrice" placeholder="Цена первого товара">
            <input v-model="newDender" placeholder="Пол">
            <input v-model="newImg" placeholder="Картинка">
          <button
          @click="$emit('addNewCategories', nameNewCategories,  newName, newPrice, newDender, newImg )">Добавить</button>

        </div>

       <AdminRedactorItem
       :transferRedactItem='transferRedactItem'
        :redactorItem='redactorItem'
        v-show='stateRedactorItem'
        :stateRedactorItem='stateRedactorItem'
      
        />

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
              {{item.name}}
            </div>
            <div class="item__price">
              {{item.price}}
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

  props:['catalog', 'redactItemFunc'],

  components: {
    AdminRedactorItem
  },
  data() {
    return{
      password: '',
      checkDone: true,
      addNewCategoriesBool: false,
      nameNewCategories: '',
      newName : '',
      newPrice : '',
      newDender: '',
      newImg: '',
      redactorItem: {},
      stateRedactorItem: false
    }
  },
  methods: {
    transferRedactItem(item){
    this.stateRedactorItem = !this.stateRedactorItem
    this.$props.redactItemFunc(item)
    },

    checkPassword(){
        if(this.password === "1234"){
          this.checkDone = !this.checkDone
          this.password = ''
        } else {
          console.log('none')
        }
    },

    addNewCategoriesOpen(){
      this.addNewCategoriesBool = !this.addNewCategoriesBool
      this.nameNewCategories = ''
      this.newName  = ''
      this.newPrice  = ''
      this.newDender = ''
      this.newImg = ''
    },

    openRedactorItem(item){
      this.redactorItem = item
      this.stateRedactorItem = !this.stateRedactorItem
    }
  }
}
</script>

<style>
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
.item__wrapper{
  padding-top: 5px;
  margin: 0 auto;
  text-align: center;
  position: relative;
}
.item_redactor{
  position:absolute;
  top:0px;
  left: 90%;
  height: 25px;
  width: 25px;
  border-radius:100%;
  background-color: green;
  cursor: pointer;
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
