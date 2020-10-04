<template>
  <div class="wrapper_redactor">
    <div>
      <span>Название: {{ redactorItem.name }}</span>
      <input v-model="newName" placeholder="Изменить название..."/>
      <button @click="redactorName">Изменить</button>
    </div>
    <div>
      Имя каталога: {{ redactorItem.catalog }}
      <input v-model='newCatalog' placeholder="Изменить каталог..."/>
      <button @click="redactorCatalog">Изменить</button>
    </div>
    <div>
      Пол: {{ redactorItem.gender }}
      <input v-model='newGender' placeholder="Изменить пол..."/>
      <button @click="redactorGender">Изменить</button>
    </div>
    <div>
      Цена: {{ redactorItem.price }}
      <input v-model='newPrice' placeholder="Изменить цену..."/>
      <button @click="redactorPrice">Изменить</button>
    </div>
    Картинка:
    <img
        class="img"
        :src='redactorItem.img'
    />
    <div>
      {{ redactorItem.img }}
      <input placeholder="Изменить изображание..." v-model='newImg'/>
      <button @click="redactorImg">Изменить</button>
    </div>

    <div>
      <button @click='aaa'>
        Добавить изменения на сайт
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminRedactorItem',
  props: ['redactorItem', 'transferRedactItem', 'stateRedactorItem'],
  data() {
    return {
      newName: '',
      newCatalog: '',
      newGender: '',
      newPrice: '',
      newImg: '',
      newRedactorItem: {
        name: '',
        gender: '',
        id: null,
        basket: false,
        catalog: '',
        size: '',
        amount: 1,
        price: null,
        img: ""
      }
    }
  },
  methods: {
    aaa() {
      this.$props.transferRedactItem(this.newRedactorItem)
      this.newRedactorItem = {
        name: '',
        gender: '',
        id: null,
        basket: false,
        catalog: '',
        size: '',
        amount: 1,
        price: null,
        img: ""
      }
    },

    redactorName() {
      if (this.newName !== '') {
        this.newRedactorItem.name = this.newName
      } else {
        this.newRedactorItem.name = this.$props.redactorItem.name
      }
      if(this.newRedactorItem.id == null){
        this.newRedactorItem.id = this.$props.redactorItem.id
      }
      if(this.newRedactorItem.gender === ''){
        this.newRedactorItem.gender= this.$props.redactorItem.gender
      }
      if(this.newRedactorItem.catalog === ''){
        this.newRedactorItem.catalog = this.$props.redactorItem.catalog
      }
      if(this.newRedactorItem.price == null){
        this.newRedactorItem.price = this.$props.redactorItem.price
      }
      if(this.newRedactorItem.img === ''){
        this.newRedactorItem.img = this.$props.redactorItem.img
      }
      this.newRedactorItem.size= this.$props.redactorItem.size
      this.newRedactorItem.amount = this.$props.redactorItem.amount
      this.newName = ''
    },
    redactorCatalog() {
      if (this.newCatalog !== '') {
        this.newRedactorItem.catalog = this.newCatalog
      } else {
        this.newRedactorItem.catalog = this.$props.redactorItem.catalog
      }
      if(this.newRedactorItem.name === ''){
        this.newRedactorItem.name = this.$props.redactorItem.name
      }
      if(this.newRedactorItem.id == null){
        this.newRedactorItem.id = this.$props.redactorItem.id
      }
      if(this.newRedactorItem.gender === ''){
        this.newRedactorItem.gender= this.$props.redactorItem.gender
      }
      if(this.newRedactorItem.price == null){
        this.newRedactorItem.price = this.$props.redactorItem.price
      }
      if(this.newRedactorItem.img === ''){
        this.newRedactorItem.img = this.$props.redactorItem.img
      }
      this.newRedactorItem.size= this.$props.redactorItem.size
      this.newRedactorItem.amount = this.$props.redactorItem.amount
      this.newCatalog = ''
    },
    redactorGender() {
      if (this.newGender !== '') {
        this.newRedactorItem.gender = this.newGender
      } else {
        this.newRedactorItem.gender = this.$props.redactorItem.gender
      }
      if(this.newRedactorItem.name === ''){
        this.newRedactorItem.name = this.$props.redactorItem.name
      }
      if(this.newRedactorItem.id == null){
        this.newRedactorItem.id = this.$props.redactorItem.id
      }
      if(this.newRedactorItem.catalog === ''){
        this.newRedactorItem.catalog = this.$props.redactorItem.catalog
      }
      if(this.newRedactorItem.price == null){
        this.newRedactorItem.price = this.$props.redactorItem.price
      }
      if(this.newRedactorItem.img === ''){
        this.newRedactorItem.img = this.$props.redactorItem.img
      }
      this.newRedactorItem.size= this.$props.redactorItem.size
      this.newRedactorItem.amount = this.$props.redactorItem.amount
      this.newGender = ''
    },
    redactorPrice() {
      if (this.newPrice !== null) {
        this.newRedactorItem.price = this.newPrice
      } else {
        this.newRedactorItem.price = this.$props.redactorItem.price
      }
      if(this.newRedactorItem.name === ''){
        this.newRedactorItem.name = this.$props.redactorItem.name
      }
      if(this.newRedactorItem.id == null){
        this.newRedactorItem.id = this.$props.redactorItem.id
      }
      if(this.newRedactorItem.gender === ''){
        this.newRedactorItem.gender= this.$props.redactorItem.gender
      }
      if(this.newRedactorItem.catalog === ''){
        this.newRedactorItem.catalog = this.$props.redactorItem.catalog
      }
      if(this.newRedactorItem.id == null){
        this.newRedactorItem.id = this.$props.redactorItem.id
      }
      if(this.newRedactorItem.img === ''){
        this.newRedactorItem.img = this.$props.redactorItem.img
      }
      this.newRedactorItem.size= this.$props.redactorItem.size
      this.newRedactorItem.amount = this.$props.redactorItem.amount
      this.newPrice = null
    },
    redactorImg() {
      if (this.newImg !== '') {
        this.newRedactorItem.img = this.newImg
      } else {
        this.newRedactorItem.img = this.$props.redactorItem.img
      }
      if(this.newRedactorItem.name === ''){
        this.newRedactorItem.name = this.$props.redactorItem.name
      }
      if(this.newRedactorItem.id == null){
        this.newRedactorItem.id = this.$props.redactorItem.id
      }
      if(this.newRedactorItem.gender === ''){
        this.newRedactorItem.gender= this.$props.redactorItem.gender
      }
      if(this.newRedactorItem.catalog === ''){
        this.newRedactorItem.catalog = this.$props.redactorItem.catalog
      }
      if(this.newRedactorItem.id == null){
        this.newRedactorItem.id = this.$props.redactorItem.id
      }
      if(this.newRedactorItem.price == null){
        this.newRedactorItem.price = this.$props.redactorItem.price
      }
      this.newRedactorItem.size= this.$props.redactorItem.size
      this.newRedactorItem.amount = this.$props.redactorItem.amount
      this.newImg = ''
    },
  },
}
</script>

<style>
.wrapper_redactor {
  position: absolute;
  z-index: 1;
  left: 20%;
  top: 70%;
  width: 60%;
  background-color: #999;
  height: 60%;
}

.img {
  height: 50px;
}
</style>