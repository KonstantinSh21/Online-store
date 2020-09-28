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
            <button  @click="addNewCategoriesOpen">Создать</button>
          </div>
        </div>

        <div v-if="addNewCategoriesBool">
            <div>
              Какое юудет название у ващей новой категории, пожалйстава введите ее на англиском языке
            </div>
            <input v-model="nameNewCategories" placeholder="Название категории">
            <input v-model="newName" placeholder="Название первого товара">
            <input v-model="newPrice" placeholder="Цена первого товара">
            <input v-model="newDender" placeholder="Пол">
            <input v-model="newImg" placeholder="Картинка">
          <button @click="$emit('addNewCategories', nameNewCategories,  newName, newPrice, newDender, newImg)">Добавить</button>
        </div>

        <div>
          <div>
            Добавить товары в имеющиемся категории
          </div>
          <button>Добавить</button>
        </div>

      </div>

    </div>
  </div>
</template>
<script>
export default {
  name: 'AdminPanel',
  props:['clouses'],
  data() {
    return{
      password: '',
      checkDone: false,
      addNewCategoriesBool: false,
      nameNewCategories: [],
      newName : '',
      newPrice : '',
      newDender: '',
      newImg: ''
    }
  },
  methods: {
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
    },
    //addNewCategories(){
      //this.nameNewCategories = [
      //  {
      //    name: this.newName,
      //    gender: this.newDender,
      //    id: Math.random()*100,
      //    basket: false,
      //    size:'',
      //    amount: 1,
      //    price: this.newPrice,
      //    img: this.newImg
      //  },
      //]

      //console.log(this.nameNewCategories )

      //this.date.push(this.nameNewCategories)

      //this.$props.clouses = this.$props.clouses + this.nameNewCategories
      //this.$props.clouses = this.$props.clouses + this.nameNewCategories
      //this.$props.clouses = this.$props.clouses + this.nameNewCategories
      //console.log(this.$props.clouses)
    //*+-7+74}
  }
}
</script>
