import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': '19790f2147msh5f9d0f7b334c112p1ae6afjsnf0a5a7ca4918'
};

const baseUrl = 'https://coinranking1.p.rapidapi.com';


const createRequest = (url) => ({url, headers: cryptoApiHeaders});


export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`)
    }),

    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`)
    }),

    getCoinHistory: builder.query({
      query: ({coinId, timePeriod}) => createRequest(`/coin/${coinId}/history?timePeriod=${timePeriod}`)
    })
  })
});

export const { useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCoinHistoryQuery } = cryptoApi;