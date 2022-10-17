import { ref } from "@vue/reactivity";
import api from "../apis/api";

export function useProduct() {
  let products = ref({
    data: [],
    links: {},
    meta: {},
  });
  let loading = ref(false);

  function fetchProducts(params = {}) {
    let { page = 1, showMore = false } = params;
    console.log("Yes, Im trying");
    loading.value = true;
    api
      .get("")
      // api.get('', { params: { page } })
      .then((response) => {
        if (showMore) {
          products.value = {
            ...response.data,
            data: [...products.value.data, ...response.data.data],
          };
        } else {
          products.value = response.data;
          console.log(products.value);
        }
      })
      .finally(() => (loading.value = false));
  }
  async function createProduct(product) {
    let createdProduct = api
      .post("/products", product)
      .then((res) => {
        console.log(res);
        console.log("Product created successfully!");
        createdProduct = res.data;
        return createdProduct;
        //Perform Success Action
      })
      .catch((error) => {
        console.log(product);
        console.log("Check if you are entering the right type of parameters");
        console.log("Check out if you are entering all required paremeters");
        // error.response.status Check status code
      })
      .finally(() => {
        //Perform action in always
      });
    return createdProduct;
  }

  function deleteProduct(product) {
    api
      .delete("/products/" + product.id)
      .then((res) => {
        console.log(res);
        console.log("Product deleted successfully!");
        //Perform Success Action
      })
      .catch((error) => {
        console.log(
          "Check if you are entering the right type of parameters" + product.id
        );
        // error.response.status Check status code
      })
      .finally(() => {
        //Perform action in always
      });
  }

  let articleDetail = ref({ category: {} });
  let articleDetailLoading = ref(false);
  function fetchProductDetail(params) {
    articleDetailLoading.value = false;
    api
      .get(`products/${params.slug}`)
      .then((response) => {
        articleDetail.value = response.data.data;
      })
      .finally(() => (articleDetailLoading.value = true));
  }

  return {
    products,
    loading,
    fetchProducts,
    createProduct,
    deleteProduct,
    articleDetail,
    articleDetailLoading,
    fetchProductDetail,
  };
}
