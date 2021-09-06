<template>
  <div class="example">
    <h1>{{ greetings }}, {{ username }}.</h1>
    <h1>Seu número favorito é: {{ favoriteNumber }}</h1>
    <h2> {{ compliment }} </h2>
    <h3 v-if="username == 'Samuel' && favoriteNumber == 7">Vejo que você é o verdadeiro Samuel. 👀</h3>

    <template v-if="favoriteAnimal == 'cat'">
      <h2>Seu animal favorito é o gato. 🐈</h2>

      <img v-for="(image, i) in animalImages.cats" class="animalImage" :src="image" :key="i">
    </template>

    <template v-else-if="favoriteAnimal == 'dog'">
      <h2>Seu animal favorito é o cachorro. 🐕</h2>

      <img v-for="(image, i) in animalImages.dogs" class="animalImage" :src="image" :key="i">
    </template>

    <h2 v-else>Aguardo saber o seu animal favorito.</h2>

    <form>
      <label>Nome do usuário</label>
      <input type="text" id="username" v-model="username">

      <label>Número favorito</label>
      <input type="number" id="number" v-model="favoriteNumber">

      <label>Eu prefiro</label>
      <div>
        <input type="radio" id="cat" value="cat" name="fav-animal" v-model="favoriteAnimal">
        <label>Gato</label>
      </div>
      
      <div>
        <input type="radio" id="dog" value="dog" name="fav-animal" v-model="favoriteAnimal">
        <label>Cachorro</label>
      </div>

      <label @click="alertClick">Digite uma palavra, sem usar a letra 'b'</label>
      <input @keyup.b="punishUser(0)" type="text" id="word" name="word" ref="inputOne">

      <label>E outra aqui também</label>
      <input @keyup="checkKey" type="text" id="word" name="word" ref="inputTwo">
    </form>
  </div>
</template>

<script>

export default {
  name: 'Example',
  data () {
    return {
      greetings: 'Boas-vindas',
      username: 'usuário',
      favoriteNumber: 0,
      opinions: [
        'Um bom número, eu diria.',
        'Esse sim é um bom número. Usaria na loteria.',
        'Número melhor não há.',
        'Perfeito! Um dos meus favoritos.'
      ],
      favoriteAnimal: '',
      animalImages: {
        cats: ['https://i.imgur.com/tIC1P4J.jpg', 'https://i.imgur.com/WO6oxQb.jpg', 'https://i.imgur.com/vghZ8Rf.jpg'],
        dogs: ['https://i.imgur.com/jIGNFlb.jpg', 'https://i.imgur.com/cxDoJ1T.jpg', 'https://i.imgur.com/Tg30O5Z.jpg']
      }
    }
  },
  computed: {
    compliment () {
      return this.opinions[this.favoriteNumber % this.opinions.length]
    }
  },
  methods: {
    alertClick() {
      alert('Tá clicando aqui por quê, seu palhaço?')
    },
    punishUser(inputNum) {
      alert('Falei para não usar letra b, miserável.')
      if(inputNum)
        this.$refs.inputTwo.value = ''

      else
        this.$refs.inputOne.value = ''
    },
    checkKey(event) {
      if(event.key == 'b')
        this.punishUser(1)
    }
  }
}
</script>

<style scoped>
  form {
    width: 30%;
    display: flex;
    flex-direction: column;
    margin: auto;
    align-items: center;
  }

  input {
    width: 250px;
    text-align: center;
    margin-bottom: 16px;
  }

  #cat, #dog {
    width: 20px;
  }

  .animalImage {
    height: 200px;
    margin-bottom: 2px;
  }
</style>
