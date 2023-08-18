<script>
  export default {
    props: {
      product: {
        type: Object,
        required: true
      }
    },
    methods: {
      addToCart() {
        this.$emit('add-to-cart', this.product);
      },
      addToFavorites() {
        this.$emit('add-to-favorites', this.product);
      }
    }
  };
  </script>

<template>
    <div class="product">
      <div class="product-info">
        <img :src="product.image" :alt="product.name" class="product-image">
        <div class="product-details">
          <span class="product-name">{{ product.name }}</span><br>
          <span class="product-price">{{ product.price }}</span>
        </div>
        <div class="product-buttons">
          <button @click="addToCart">Добавить в корзину</button>
          <button @click="addToFavorites">Добавить в избранное</button>
        </div>
      </div>
    </div>
  </template>




  <style>

  </style>
