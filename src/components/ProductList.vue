<template>
  <div class="product-list">
    <h4>Наша подборка для вас</h4>
    <div class="product-cards">
      <div v-for="product in products" :key="product.id" class="product-card">
        <img :src="product.image" alt="Product Image" class="product-image" />
        <div class="product-info">
          <h3 class="product-name">{{ product.name }}</h3>
          <h4 class="product-price">{{ product.price }} сум</h4>
        </div>
        <div class="product-actions">
          <button @click="addToCart(product)"><i class="fa fa-shopping-cart"></i> Добавить в корзинку</button><br>
          <button @click="addToFavorites(product)"><i class="fa-solid fa-heart"></i> Добавить в избранное</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  methods: {
    addToCart(product) {
      this.$emit('add-to-cart', product);
    },
    addToFavorites(product) {
      this.$emit('add-to-favorites', product);
    },
  },
};
</script>



<style>
body{
  width: 100%;
  margin: 0px;
  padding: 0px;
  background-color: rgb(255, 255, 255);
}

.product-list{
  width: 100%;
  height: 30px;
  justify-content: center;
}
.product-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 8px;
  background-color: white;
}

.product-card {
  border: 3px solid #482121;
  border-radius: 12px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.product-image {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 15px;
  color: grey;
}

.product-name {
  font-size: 18px;
  margin-bottom: 5px;
  padding: 5%;
  color: black;
}

.product-price {
  font-size: 16px;
  font-weight: center;
  color: rgb(0, 0, 0);
}

.product-actions button {
  cursor: pointer;
  margin-top: 10px;
  padding: 4px 6px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

.product-actions button:hover {
  background-color: #0056b3;
}
</style>
