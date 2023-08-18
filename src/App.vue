<script>
import ShoppingCart from './components/ShoppingCart.vue';
import Favorites from './components/Favorites.vue';
import ProductList from './components/ProductList.vue';
import Navbar from './components/Navbar.vue';


export default {
  components: {
    ProductList,
    ShoppingCart,
    Favorites,
    Navbar,

  },
  data() {
    return {
      products: [
        { name: "Xolodilnik artel", image: "src/assets/xolod.jpg",  price: 4200000 },
        { name: "Xolodolnik samsung", image: "src/assets/samsung1.jpg", price: 5200000},
        { name: "Xolodilnik LG", image: "src/assets/lg.jpg", price: 3200000 },
        { name: "Televizor artel", image: "src/assets/artel.jpg", price: 3000000 },
        { name: "Televizor samsung", image: "src/assets/samsungt.jpg", price: 4500000 },
        { name: "Televizor LG", image: "src/assets/lgt.jpg", price: 2200000 },
        { name: "Iphone 14", image: "src/assets/iphone14.jpg", price: 12000000 },
        { name: "Iphone 13", image: "src/assets/iphone13.jpg", price: 10000000 },
        { name: "Iphone 12", image: "src/assets/iphone12.jpg", price: 8200000 },
        { name: "Iphone 11", image: "src/assets/iphone11.jpg", price: 6200000 },
        { name: "Iphone 10", image: "src/assets/iphone10.png", price: 4200000 },
        { name: "Iphone 6", image: "src/assets/iphone6.jpg", price: 2200000 },
      ],
      cart: [],
      favorites: [],
      searchQuery: "",
    };
  },
  computed: {
  },
  methods: {
    addToCart(product) {
      if (!this.cart.includes(product)) {
        this.cart.push(product);
      }
    },
    removeFromCart(product) {
      const index = this.cart.indexOf(product);
      if (index !== -1) {
        this.cart.splice(index, 1);
      }
    },
    addToFavorites(product) {
      if (!this.favorites.includes(product)) {
        this.favorites.push(product);
      }
    },
    removeFromFavorites(product) {
      const index = this.favorites.indexOf(product);
      if (index !== -1) {
        this.favorites.splice(index, 1);
      }
    },
    searchProducts() {
    if (this.searchQuery.trim() === "") {
      return this.products;
    }
    const query = this.searchQuery.toLowerCase();
    return this.products.filter(product => product.name.toLowerCase().includes(query));
  },
  },
  getters: {
    CART(state) {
      return state.cart;
    },
    FAVORITES(state){
      return state.favorites;
    },
  },
};
</script>


<template>
    <div class="app-container">
    <div class="header">
        <img class="img-control" src="src/assets/asaxiy-logo.svg" alt="Search Icon" >
        <input class="form-control mr-sm-2"  type="text" v-model="searchQuery" @input="handleSearch" placeholder="Поиск...">
        <ShoppingCart :cart="cart" @remove-from-cart="removeFromCart" />
        <!-- <navbar></navbar> -->
        <Favorites :favorites="favorites" @remove-from-favorites="removeFromFavorites" />
        </div>
    <div class="content">
      <ProductList :products="products" @add-to-cart="addToCart" @add-to-favorites="addToFavorites" />
   </div>
  </div>
</template>



<style>
.app-container {
  flex-direction: column;
}


.header {
  align-items: center;
  background-color: white;
  padding: 0px, 20px;
  padding:  0px, 80px;
  justify-content: space-around;
  display: flex;
  flex-wrap: wrap;
}

.logo-container {
  margin-right: 20px;
}

.logo {
  width: 150px;
  height: 100px;
}


input[type="text"] {
  padding: 9px;
  border: 3px solid #ccc;
  border-radius: 9px;
  width: 40%;
}
</style>
