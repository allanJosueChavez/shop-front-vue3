<script>

import { useProduct } from "@/composables/useProduct.js";
export default {
  name: "Home",
  // components: {
  //   HelloWorld
  // },
  setup() {
    let { fetchProducts, products } = useProduct();
    fetchProducts();
    return {
      products,
    };
  },
  methods: {
    assignUrlImage: function (index) {
      var baseURL =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
      var imgURL = baseURL + (index + 1) + ".png";
      return imgURL;
    },
  },
};
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
    <ul id="example-2">
      <li v-for="(product, index) in products.results">
        <img v-bind:src="assignUrlImage(index)" alt="" />
        {{ index }} - {{ product.name }}
      </li>
    </ul>

  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
