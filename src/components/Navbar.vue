<template>
    <nav class="navbar">
      <router-link to="/">Меню</router-link>
      <button  @click="goToCartPage">Корзинка</button>
      <router-link to="/favorites">Избранное</router-link>
    </nav>
  </template>

  <script>
  export default {
    methods: {
      goToCartPage(){
        this.$router.push('/cart')
      }
    }
  }

</script>

  <style scoped>
  .navbar {
    background-color: rgb(255, 255, 255);
    color: blue;
    padding: 10px;
    display: flex;
    justify-content: right;
  }

  .navbar a {
    color: blue;
    text-decoration: none;
    margin: 0 10px;
  }
  </style>
