import { baseApi } from "../../api/baseApi";

const product = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addProduct: builder.mutation({
      query: (payload) => ({
        url: "/product",
        method: "POST",
        body: payload,
      }),

      invalidatesTags: ["product"],
    }),

    getProducts: builder.query({
      query: ({ page, limit }) => ({
        url: "/product",
        method: "GET",
        params: { page, limit },
      }),

      providesTags: ["product"],
    }),

    getProductById: builder.query({
      query: (id) => ({
        url: `/product/${id}`,
        method: "GET",
      }),

      providesTags: ["product"],
    }),

    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/product/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["product"],
    }),

    updateProduct: builder.mutation({
      query: ({ id, payload }) => ({
        url: `/product/${id}`,
        method: "PATCH",
        body: payload,
      }),
      invalidatesTags: ["product"],
    }),
  }),
});

export const {
  useAddProductMutation,
  useGetProductsQuery,
  useDeleteProductMutation,
  useUpdateProductMutation,
  useGetProductByIdQuery,
} = product;
