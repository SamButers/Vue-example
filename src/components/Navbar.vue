<template>
      <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/example">Example</router-link>
      </div>   
</template>

<script>
      export default {
            name: 'Navbar'
      }
</script>

<style scoped>
      #nav {
        padding: 30px;
        background-color: #3244a8;
      }

      #nav a {
        font-weight: bold;
        color: white;
      }

      #nav a.router-link-exact-active {
        color: #42b983;
      }
</style>