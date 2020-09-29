<template>
    <div class="wrapper_redactor">
        <div>
           <span>Название: {{redactorItem.name}}</span>
           <input v-model="newName" placeholder="Изменить название..."/>
           <button @click="redactorName">Изменить</button> 
        </div>
        <div>
            Имя каталога: {{redactorItem.catalog}}
            <input v-model='newCatalog' placeholder="Изменить каталог..."/>
            <button @click="redactorCatalog">Изменить</button>
        </div>
        <div>
            Пол: {{redactorItem.gender}}
            <input v-model='newGender' placeholder="Изменить пол..."/>
            <button @click="redactorGender">Изменить</button>
        </div>
        <div>
            Цена: {{redactorItem.price}}
            <input v-model='newPrice' placeholder="Изменить цену..."/>
            <button @click="redactorPrice">Изменить</button>
        </div>
        Картинка: 
        <img
        class="img"
        :src='redactorItem.img'
        />
        <div>
            {{redactorItem.img}}
           <input  placeholder="Изменить изображание..." v-model='newImg'/>
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
export default{
    name:'AdminRedactorItem',
    props:['redactorItem', 'transferRedactItem', 'stateRedactorItem'],
    data() {
        return {
            newName: '',
            newCatalog: '',
            newGender: '',
            newPrice: '',
            newImg: '',
            newRedactorItem : {
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
        aaa(){
           this.$props.transferRedactItem(this.newRedactorItem)
        },

        redactorName(){
            if(this.newName !== ''){
                this.newRedactorItem.name = this.newName
            } else{
                this.newRedactorItem.name = this.$props.redactorItem.name
            } 
            this.newRedactorItem.id = this.$props.redactorItem.id
            this.newName = ''
          
        },
        redactorCatalog(){
            if(this.newCatalog !== ''){
                this.newRedactorItem.catalog = this.newCatalog
            } else{
                this.newRedactorItem.catalog = this.$props.redactorItem.catalog
            }
            this.newRedactorItem.id = this.$props.redactorItem.id
            this.newCatalog = ''
        },
        redactorGender(){
            if(this.newGender !== ''){
                this.newRedactorItem.gender = this.newGender
            } else{
                this.newRedactorItem.gender = this.$props.redactorItem.gender
            }
            this.newRedactorItem.id = this.$props.redactorItem.id
            this.newGender= ''
        },
        redactorPrice(){
            if(this.newPrice !== null){
                this.newRedactorItem.price = this.newPrice
            } else{
                this.newRedactorItem.price = this.$props.redactorItem.price
            }
            this.newRedactorItem.id = this.$props.redactorItem.id
            this.newPrice = null
        },
        redactorImg(){
            if(this.newImg !== ''){
                this.newRedactorItem.img = this.newImg
            } else{
                this.newRedactorItem.img = this.$props.redactorItem.img 
            }
            this.newRedactorItem.id = this.$props.redactorItem.id
            this.newImg = ''
            console.log(this.newRedactorItem)
        },
    },
}
</script>

<style>
.wrapper_redactor{
    position: absolute;
    z-index: 1;
    left: 20%;
    top:70%;
    width: 60%;
    background-color: #999;
    height: 60%;
}
.img{
    height: 50px;
}
</style>