import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getMessage } from "../redux/Slices/messageSlice";


export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    tagTypes: ['Posts'],
    endpoints: (builder) => ({
        getAllPosts: builder.query({
            query: () => '/posts',
            providesTags: ['Posts'],
            // async onQueryStarted(id, { dispatch, queryFulfilled }) {
            //     dispatch(getMessage('pending'))
            //     try {
            //         const { data } = await queryFulfilled
            //         console.log(data)
            //         dispatch(getMessage('fullfilled'))
            //     }
            //     catch (err) {
            //         console.log(err)
            //         dispatch(getMessage('rejected'))
            //     }
            // }
        }),
        getPostById: builder.query({
            query: (id) => `/posts/${id}`,
            providesTags: ['Posts']
        }),
        addPost: builder.mutation({
            query: (data) => ({
                url: '/posts',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['Posts'],
            async onQueryStarted(item, { dispatch, queryFulfilled }) {
                dispatch(getMessage('loading', 'Loading...'))
        
                try {
                  const { data } = await queryFulfilled;
                  dispatch(getMessage({status: 'success',message: 'Post created successfully!'}))
        
                } catch (err) {
                  console.error('Request failed', err);
                  dispatch(getMessage({status: 'error',message: 'Something went wrong!'}))
                }
              },
        })
    }),
})

export const { useGetAllPostsQuery, useGetPostByIdQuery, useAddPostMutation } = postApi