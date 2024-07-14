/* eslint-disable prefer-const */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { RootState } from '../store';

const baseQuery = fetchBaseQuery({
  baseUrl: "https://nursery-backend-ten.vercel.app/api",
});

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,
  tagTypes: ["product", "category"],
  endpoints: () => ({}),
});
