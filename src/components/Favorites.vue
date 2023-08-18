<template>
  <div class="favorites">
    <h2>Избранное</h2>
    <button @click="favoritesVisible = !favoritesVisible">
      {{ favoritesVisible ? 'Скрыть' : 'Показать' }} избранное
    </button>
    <ul v-show="favoritesVisible">
      <li v-for="product in favorites" :key="product.id" class="product">
        <div class="product-info">
          <img :src="product.image" alt="Product Image" class="product-image" />
          <span class="product-name">{{ product.name }}</span><br>
          <span class="product-price">{{ product.price }} сум</span>
        </div>
        <div class="product-actions">
          <button @click="removeFromFavorites(product)">Удалить</button>
        </div>
      </li>
    </ul>
    <div class="total" v-if="cartVisible && cart.length > 0">
      Общая сумма: {{ getTotalPrice() }}
    </div>
    <div v-else>
      Избранное пуста: 0
    </div>
  </div>
</template>

<script>
export default {
  props: {
    favorites: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      favoritesVisible: false,
    };
  },
  methods: {
    removeFromFavorites(product) {
      this.$emit('remove-from-favorites', product);
    },
  },
};
</script>

<style>
.favorites {
  border: 1px solid #ccc;
  padding: 10px;
  margin-top: 20px
}

.toggle-button {
  background-color: #ff5a5f;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}

.favorites-list {
  list-style: none;
  padding: 0;
}

.product {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
}

.product-info {
  display: flex;
  flex-direction: column;
}

.product-name {
  font-weight: bold;
}

.product-price {
  color: #555;
}

.remove-button {
  background-color: #f0ad4e;
  color: white;
  border: none;
  padding: 2px 5px;
  cursor: pointer;
}
</style>
