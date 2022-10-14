<script>
import api from "../apis/api";
export default {
  
  // components: {
  //   HelloWorld
  // },
  setup() {
    // let { fetchProducts, products } = createProduct();
    // fetchProducts();
    // return {
    //   products,
    // };
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
    name: 'PostFormAxios',
    data(){
        return{
            form: {
                name: '',
                price: '0',
                category: ''
            }
        }
    },
    methods: {
        createProduct(){
            api.post('/products', this.form)
                 .then((res) => {
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
</script>

<template> 
  <main>
    <!-- <TheWelcome /> -->
    <section class="uer-registration">
      <h3>Create a new Product</h3>
      <form @submit.prevent="createProduct">
        <h4>
            Name (Required)
        </h4>
        <input type="text" placeholder="e.g: cereal" v-model="form.name">
        <h4>Price</h4>
        <input type="text"  v-model="form.price">
        <h4>Category</h4>
        <input type="text"  v-model="form.category"><br>
        <input type="submit" value="Create"/>
      </form>
    </section>
  </main>
</template>
