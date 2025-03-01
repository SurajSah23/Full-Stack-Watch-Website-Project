// watchesApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const watchesApi = createApi({
  reducerPath: 'watchesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }),
  tagTypes: ['Watch'],
  endpoints: (builder) => ({
    getWatches: builder.query({
      query: () => '/watches',
      providesTags: ['Watch'],
    }),
    getWatchById: builder.query({
      query: (id) => `/watches/${id}`,
      providesTags: ['Watch'],
    }),
    getWatchesByCategory: builder.query({
      query: (category) => `/watches/category/${category}`,
      providesTags: ['Watch'],
    }),
    addWatch: builder.mutation({
      query: (watch) => ({
        url: '/watches',
        method: 'POST',
        body: watch,
      }),
      invalidatesTags: ['Watch'],
    }),
    updateWatch: builder.mutation({
      query: ({ id, watch }) => ({
        url: `/watches/${id}`,
        method: 'PUT',
        body: watch,
      }),
      invalidatesTags: ['Watch'],
    }),
    deleteWatch: builder.mutation({
      query: (id) => ({
        url: `/watches/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Watch'],
    }),
  }),
});

export const {
  useGetWatchesQuery,
  useGetWatchByIdQuery,
  useGetWatchesByCategoryQuery,
  useAddWatchMutation,
  useUpdateWatchMutation,
  useDeleteWatchMutation,
} = watchesApi;