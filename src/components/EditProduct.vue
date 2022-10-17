<template>
    <div class="products">
        <h1>EDIT PRODUCT</h1>
        <h1> {{this.product}}</h1>
      
        <!-- <section class="user-registration">
            <form @submit.prevent="updateList(this.form)">
                <h4>Name (Required)</h4>
                <h4>{{this.$route}}</h4>
                <input type="text" placeholder="e.g: cereal" v-model="form.name" />
                <h4>Price</h4>
                <input type="text" v-model="form.price" />
                <h4>Category</h4>
                <input type="text" v-model="form.category" /><br />
                <input type="submit" value="Submit Changes" />
            </form>
        </section> -->
    </div>
</template>
<script>
// import Products from "../views/Products.vue";
// const props = defineProps ({
//   object:{
//     required: true,
//     type: object
//   }
// })

export default {
    name: "EditProduct",
    // props: {
    // object: {
    //   type: Object,
    //   required: true
    // },
    // },
   
    data() {
        return {
            product:{},
            form: {
                name: "",
                price: "0",
                category: "",
            },
        };
    },
    created(){
        this.product = this.$route.params.title
        console.log(this.product);
    }
   
}
</script>


