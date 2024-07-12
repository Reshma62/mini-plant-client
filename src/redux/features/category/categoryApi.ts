import { baseApi } from "../../api/baseApi";

const category = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addCategory: builder.mutation({
      query: (payload) => ({
        url: "/category",
        method: "POST",
        body: payload,
      }),

      invalidatesTags: ["category"],
    }),

    getCategories: builder.query({
      query: ({ page, limit }) => ({
        url: "/category",
        method: "GET",
        params: { page, limit },
      }),

      providesTags: ["category"],
    }),

    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/category/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["category"],
    }),

    updateCategory: builder.mutation({
      query: ({ id, payload }) => ({
        url: `/category/${id}`,
        method: "PATCH",
        body: payload,
      }),
      invalidatesTags: ["category"],
    }),
  }),
});

export const {
  useAddCategoryMutation,
  useGetCategoriesQuery,
  useDeleteCategoryMutation,
  useUpdateCategoryMutation,
} = category;
