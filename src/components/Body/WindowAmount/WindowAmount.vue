<template>
    <div class="wrapper">
        <div class="wrapper-window">
            <div class="wrapper-window__item">
                <div class="wrapper-window__header">
                    <div class="text__header">
                        Выберите нужное количество товара и размер
                    </div>
                    <div @click='$emit("exit")' class="exit">
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
                           <span>{{itemClick.amount}}</span> 
                        </div>
                        <div class="number-redactor">
                            <div @click='musicNumber' class="redactor">
                                Убавить
                            </div>
                            <div @click='plusNumber' class="redactor">
                                Добавить
                            </div> 
                     </div>
                 </div>
             </div>
             <div class="info">
                <span v-if="itemClick.name !== ''">
                    Вы заказываете {{itemClick.name}},
                </span> размером {{itemClick.size}}. {{itemClick.amount}} штук

                <button @click="$emit('addBacket' )" >
                    Добавить в корзину
                </button>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default{
    name: "WindowAmount",
    props:[
        'openWindow',
        'newArrayBacket',
        'Twists',
        'Jeans',
        'itemClick'
    ],
    methods: {
        addSize(size){
            this.itemClick.size = size    
        },
        musicNumber(){
            if(this.itemClick.amount === 1){
                alert('Нельзя заказать меньше 1')
            } else{
                this.itemClick.amount= this.itemClick.amount - 1
            }
            console.log(this.itemClick.amount)
        },
        plusNumber(){
            this.itemClick.amount = this.itemClick.amount + 1
            console.log(this.itemClick.amount)
        },
        
    },
}
</script>

<style>
.wrapper{
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 205%;
    background-color: rgba(0, 0, 0, 0.7)
}
.wrapper-window{
    position: relative;
    height: 40%;
    width: 40%;
    text-align: center;
    margin: 0 auto;
    background-color: #fff;
}
.wrapper-window__item{
    margin-top: 400px;
    padding: 10px;
}
.wrapper-window__header{    
    display: flex;
    justify-content: space-evenly;
    padding: 16px;
    font-size: 20px;
    padding-top: 40px;
}
.exit{
    background-color: #ccc;
    padding: 5px;
}
.exit:hover{
    background-color: red;
}
.wrapper-window__size{
    padding-top: 40px;
    display: flex;
}
.size{
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

.dropdown-content{
    display: none;
    position: absolute;
    left: 11.1%;
    background-color: #f1f1f1;
    min-width: 160px;
    z-index: 1;
}
.dropdown-content div {
    color: black;
    padding: 12px 16px;
    display: block;
}
.dropdown-content div:hover {background-color: #ddd}

.size:hover .dropdown-content {
    display: block;
}

.amount{
    width: 50%;
}
.checkbox{
    display: flex;
    justify-content: center;
    font-size: 18px;
}

.number-amount{
    margin: 0 auto;
    background-color: #2196F3;
    width: 25%;
    height: 100%;
    position: relative;
}
.number-amount span{
    color: #fff;
    font-size: 30px;
    font-weight: bold;
    left: 38%;
    top: 15%;
    position: absolute;
} 

.number-redactor{
    margin-top:10px ;
    display: flex;
    justify-content: space-evenly;
}

.redactor{
    background-color: #ccc;
    height: 40px;
    width: 25%;
}

.redactor:hover{
    background-color: #888;
}
.info{
    padding-top: 160px;
}
.info button{
    margin-top: 40px;
    width: 60%;
    font-size: 20px;
    height: 40px;
    background-color: #2196F3;
    color: #fff;
    border: none;
}

.info button:hover{
    background-color: #216599;
}

</style>