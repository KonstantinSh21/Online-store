<template>
    <div class="wrapper_redactor">
        <div>
           <span>Название: {{redactorItem.name}}</span>
           <input v-modal='newName' placeholder="Изменить название..."/><button @click="redactorName">Изменить</button> 
        </div>
        <div>
            Имя каталога: {{redactorItem.catalog}}
            <input v-modal='newCatalog' placeholder="Изменить каталог..."/><button @click="redactorCatalog">Изменить</button>
        </div>
        <div>
            Пол: {{redactorItem.gender}}
            <input v-modal='newGender' placeholder="Изменить пол..."/><button @click="redactorGender">Изменить</button>
        </div>
        <div>
            Цена: {{redactorItem.price}}
            <input v-modal='newPrice' placeholder="Изменить цену..."/><button @click="redactorPrice">Изменить</button>
        </div>
        Картинка: 
        <img
        class="img"
        :src='redactorItem.img'
        />
        <div>
            {{redactorItem.img}}
           <input  placeholder="Изменить изображание..." v-modal='newImg'/><button @click="redactorImg">Изменить</button>
        </div>  
    </div>
</template>

<script>
export default{
    name:'AdminRedactorItem',
    props:['redactorItem'],
    data() {
        return {
            newName: '',
            newCatalog: '',
            newGender: '',
            newPrice: '',
            newImg: ''
        }
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