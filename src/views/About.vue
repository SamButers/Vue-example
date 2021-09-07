<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2 v-if="name && surname">Eu sei o seu nome, ele é... {{ fullname }}</h2>
  </div>
</template>

<script>
  import { mapGetters, mapState } from 'vuex'

  export default {
    computed: {
      ...mapGetters(['fullname']),
      ...mapState(['name', 'surname'])
    }
  }
</script>