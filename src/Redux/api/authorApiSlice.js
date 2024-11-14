import { apiSlice } from "./apiSlice";

export const authorApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        fetchAuthors: builder.query({
            query: () => "/authors",
            transformResponse: (response) => response?.authors,
        }),
    }),
});

export const { useFetchAuthorsQuery } = authorApiSlice;
