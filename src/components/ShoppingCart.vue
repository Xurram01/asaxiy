<template>
  <div class="cart">
    <h2>Корзинка</h2>
    <button @click="cartVisible = !cartVisible">{{ cartVisible ? 'Скрыть' : 'Показать' }} корзину</button>
    <ul class="cart-items" v-show="cartVisible && cart.length > 0">
      <li v-for="product in cart" :key="product.id" class="cart-item">
        <div class="product-info">
          <img :src="product.image" alt="Product Image" class="product-image" />
          <span class="product-name">{{ product.name }}</span>
          <div class="quantity-controls">
            <button class="quantity-btn" @click="updateQuantity(product, -1)">-</button>
            <span>Кол: {{ product.quantity }}</span>
            <button class="quantity-btn" @click="updateQuantity(product, 1)">+</button>
          </div>
          <span class="product-price">Цена: {{ product.price }}</span>
        </div>
        <div class="product-actions">
          <button @click="removeFromCart(product)">Удалить</button>
        </div>
      </li>
    </ul>
    <div class="total" v-if="cartVisible && cart.length > 0">
      Общая сумма: {{ getTotalPrice() }}
    </div>
    <div v-else>
      Корзинка пуста: 0
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cart: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      cartVisible: true,
    };
  },
  methods: {
    updateQuantity(product, amount) {
    const index = this.cart.findIndex(item => item.id === product.id);
    if (index !== -1) {
      const newQuantity = this.cart[index].quantity + amount;
      if (newQuantity >= 0 && newQuantity <= product.maxQuantity) {
        this.cart[index].quantity = newQuantity;
        this.showNotification(`${product.name} quantity updated.`);
      } else if (newQuantity < 0) {
        this.showNotification(`Quantity cannot be negative for ${product.name}.`);
      } else if (newQuantity > product.maxQuantity) {
        this.showNotification(`Maximum quantity exceeded for ${product.name}.`);
      }
    }
  },
    removeFromCart(product) {
      const index = this.cart.indexOf(product);
      if (index !== -1) {
        this.cart.splice(index, 1);
      }
    },
    getTotalPrice() {
      return this.cart.reduce((total, product) => total + (product.price * product.quantity || 0), 0);
    },
  },
};
</script>

<style scoped>
.cart {
  border: 1px solid #ccc;
  padding: 10px;
  margin-top: 20px;
}

.cart h2 {
  margin-bottom: 10px;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
}

.product-info {
  display: flex;
  align-items: center;
}

.quantity-btn {
  padding: 2px 5px;
  margin: 0 5px;
  cursor: pointer;
}

.product-actions button {
  background-color: #ff5a5f;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}
</style>
