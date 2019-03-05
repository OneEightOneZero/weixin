<template>
  <div>
    <header>{{text}}</header>
    <input v-model="text" />
  </div>
</template>
<script>
export default {
  data () {
    return {
      text: '头部组件'
    }
  },
  mounted () {
    this.text = '头部组件'
    console.log(wx)
  }
}
</script>

<style scoped>
header {
  color: red;
}
</style>

