<script>
import api from "../apis/api";
import { useProduct } from "@/composables/useProduct.js";
export default {
  // components: {
  //   HelloWorld
  // },
  setup() {
    let { fetchProducts, products, createProduct, deleteProduct } =
      useProduct();
    fetchProducts();
    let productsList = products;
    const updateList = (product) => {
      createProduct(product).then((res) => {
        productsList.value.push(res);
        //Perform Success Action
      });
      console.log(product.name);
      console.log(productsList);
      //A promise is missing here, after you create, res
      // console.log(createProduct(product));
    };
    const deleteRecord = (product) => {
      deleteProduct(product);

      productsList.value = productsList.value.filter((t) => t !== product);
      // productsList = productsList.value.filter(function( product ) {
      //   return product.id !== id;
      // });
    };
    return {
      updateList,
      productsList,
      createProduct,
      deleteRecord,
    };
  },
  //   created() {
  //   let post = {
  //     title: 'foo',
  //     body: 'bar',
  //     userId: 1
  //   };
  //   axios.post("https://jsonplaceholder.typicode.com/posts", post).then((result) => {
  //     console.log(result);
  //   });
  //   },
  name: "PostFormAxios",
  data() {
    return {
      // products:{},
      form: {
        name: "",
        price: "0",
        category: "",
      },
    };
  },

  methods: {
    // createProduct() {
    //   api
    //     .post("/products", this.form)
    //     .then((res) => {
    //       console.log(res);
    //       console.log("Product created successfully!");
    //       //Perform Success Action
    //     })
    //     .catch((error) => {
    //       console.log("Check if you are entering the right type of parameters");
    //       console.log("Check out if you are entering all required paremeters");
    //       // error.response.status Check status code
    //     })
    //     .finally(() => {
    //       console.log(this.products.value);

    //       //Perform action in always
    //     });
    // },
    getProducts(params = {}) {
      let { page = 1, showMore = false } = params;
      loading.value = true;
      api
        .get("")
        // api.get('', { params: { page } })
        .then((response) => {
          if (showMore) {
            this.products.value = {
              ...response.data,
              data: [...products.value.data, ...response.data.data],
            };
          } else {
            this.products.value = response.data;
          }
        })
        .finally(() => (loading.value = false));
    },
  },
};
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    <section class="user-registration">
      <h3>Create a new Product</h3>
      <form @submit.prevent="updateList(this.form)">
        <h4>Name (Required)</h4>
        <input type="text" placeholder="e.g: cereal" v-model="form.name" />
        <h4>Price</h4>
        <input type="text" v-model="form.price" />
        <h4>Category</h4>
        <input type="text" v-model="form.category" /><br />
        <input type="submit" value="Create" />
      </form>
    </section>
    <div class="products">
      <table>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Price</th>
          <th>Category</th>
          <th>Tags</th>
          <th>Discount</th>
          <th>Actions</th>
        </tr>
        <tr v-for="(product, index) in productsList">
          <td>{{ product.id }}</td>
          <td>{{ product.name }}</td>
          <td>Q{{ product.price }}.00</td>
          <td>{{ product.category }}</td>
          <td>{{ product.tag }}</td>
          <td>{{ product.discounts_id }}</td>
          <td>
            <button class="button success">Edit</button>
            <button v-on:click="deleteRecord(product)" class="button danger">
              Delete
            </button>
          </td>
        </tr>
      </table>
    </div>
  </main>
  <!-- <ProductsTable /> -->
</template>

<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #494949;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #373737;
}

.button {
  border: none;
  color: white;
  padding: 10px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}

.danger {
  background-color: #d61d00;
} /* Green */
.success {
  background-color: #84d600;
}
</style>
