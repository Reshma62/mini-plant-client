import { baseApi } from "../../api/baseApi";

const category = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addCategory: builder.mutation({
      query: (payload) => ({
        url: "/category",
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const { useAddCategoryMutation } = category;
