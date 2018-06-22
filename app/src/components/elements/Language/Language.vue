<template>
  <div id="app">
    <div>
        <button @click="setLang('ja')">日本語</button>
        <button @click="setLang('en')">English</button>
        <button @click="setLang('vn')">Tiếng Việt</button>
      </div>
  </div>
</template>

<script>
    export default {
    data() {
      return {
        posts: [],
        errors: []
      }
    },
    methods:{
      setLang(lang){
        this.$store.dispatch('setLang', lang)
      }
    },
    created () {
      this.$store.dispatch('setLang', 'en')
    }
  }
</script>