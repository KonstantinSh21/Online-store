<template>
<div>
    Не нашел данных об такой категории
    <button @click='$emit("closeSearch")'>
        Закрыть
    </button>
</div>
</template>
<script >
export default {
name :'SearchNoneItem'
}
</script>
<style>

</style>