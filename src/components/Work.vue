<template>
  
</template>

<script>
export default {
  name: 'Work',
  props: ['title', 'imageUri', 'description'],
  data () {
    return {

    }
  },
  computed: {
    image () {
      return this.imageUri ? require('../assets/img/' + this.imageUri + '.png') : null
    },
    link () {
      return this.title ? 'work/' + this.title.toLowerCase() : null
    }
  }
}
</script>

<style scoped lang="scss">

</style>
