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

    loading.value = true;
    api.get('')
    // api.get('', { params: { page } })
      .then(response => {
        if (showMore) {
          products.value = {
            ...response.data,
            data: [...products.value.data, ...response.data.data],
          }
        } else {
          products.value = response.data;
        }
      })
      .finally(() => loading.value = false);
  }

  let articleDetail = ref({ category: {} });
  let articleDetailLoading = ref(false);
  function fetchProductDetail(params) {
    articleDetailLoading.value = false;
    api.get(`products/${params.slug}`)
      .then(response => {
        articleDetail.value = response.data.data;
      })
      .finally(() => articleDetailLoading.value = true)
  }

  return {
    products,
    loading,
    fetchProducts,
    articleDetail,
    articleDetailLoading,
    fetchProductDetail,
  };
}