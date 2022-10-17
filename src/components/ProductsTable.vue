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


<!-- <script>
import api from "../apis/api";

export default {
  setup() {
  },

    name: 'GetFormAxios',
    data(){
        return{
            products: {}
        }
    },
    methods: {
        createProduct(){
            api.get('')
                 .then((res) => {
                  console.log(res);
                  products.value = res.data;
                    console.log('Product created successfully!')
                     //Perform Success Action
                 })
                 .catch((error) => {
                    console.log('Check if you are entering the right type of parameters')
                    console.log('Check out if you are entering all required paremeters')
                     // error.response.status Check status code
                 }).finally(() => {
                     //Perform action in always
                 });
        }
  },
};
</script> -->

<template>
  <div class="products">
    <ul id="example-2">
      <li v-for="(product, index) in products">
        <!-- <img v-bind:src="assignUrlImage(index)" alt="" /> -->
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
