import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const countryAPi = createApi({
    reducerPath: 'countryApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (builder) => ({
        getCountryByName: builder.query({
            query: (id) => `/todos/${id}`,
        }),
        getAllCountries: builder.query({
            query: () => '/todos',
        })
    }),
})

export const { useGetCountryByNameQuery, useGetAllCountriesQuery } = countryAPi


