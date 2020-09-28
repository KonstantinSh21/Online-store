<template>
  <div>

    <input v-model="value" type="text" placeholder="Search"/>
    <div @click="Search">123</div>

  </div>
</template>

<script>
export default {
  name: "Search",
  props: [
    'Jeans',
    'Twists',
    'searchArray'
  ],
  data() {
    return {
      value: '',
    }
  }
  ,
  methods: {
    Search() {
      this.$props.searchArray = []
      //поиск по джинсам
      for (let i = 0; i < this.$props.Jeans.length; i++) {
        if (this.value === this.$props.Jeans[i].name || this.value === 'джинсы' || this.value === 'Джинсы') {
          this.$props.searchArray.push(this.$props.Jeans[i])
        } else {
          console.log('false')
        }
      }
      //поиск по курткам
      for (let i = 0; i < this.$props.Twists.length; i++) {
        if (this.value === this.$props.Twists[i].name || this.value === 'Куртки' || this.value === 'куртки') {
          console.log(this.$props.searchArray)
          this.$props.searchArray.push(this.$props.Jeans[i])
        } else {
          console.log('false')
        }
      }
      if (this.value === 'женская' || this.value === 'Женская') {
        for (let i = 0; i < this.$props.Twists.length + this.$props.Jeans.length; i++) {
          if (this.$props.Jeans[i].gender === 'women') {
            this.$props.searchArray.push(this.$props.Jeans[i])
          }
          if (this.$props.Twists[i].gender === 'women') {
            this.$props.searchArray.push(this.$props.Twists[i])
          }
        }
      }
      this.Jeans.forEach((el) => {
        console.log(el.name)
      })
    }
  }
}
</script>

<style scoped>

</style>