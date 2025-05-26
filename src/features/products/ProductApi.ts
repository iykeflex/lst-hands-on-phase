import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Product } from '../../types/product';

type ProductResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

export const productAPI = createApi({
  reducerPath: 'productAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    getProducts: builder.query<ProductResponse, number>({
      query: (limit = 10) => `products?limit=${limit}`,
    }),
  }),
});

export const { useGetProductsQuery } = productAPI;
