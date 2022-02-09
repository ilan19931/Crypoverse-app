import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '19790f2147msh5f9d0f7b334c112p1ae6afjsnf0a5a7ca4918'
};

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';


const createRequest = (url) => ({url, headers: cryptoNewsHeaders});


export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({newsCategory, count}) =>
       createRequest(`/news/search?q=${newsCategory}&safeSearch=off&textToFormat=Raw&freshness=Day&count=${count}`)
    })
  })
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;