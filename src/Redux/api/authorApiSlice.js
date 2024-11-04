import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../utils/config";

export const authorApiSlice = createApi({
    reducerPath: "authorApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${API_URL}`,
        credentials: "include",
        prepareHeaders: (headers, { getState }) => {
            const token = getState().user.accessToken;

            if (token) {
                headers.set("authorization", `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        fetchAuthors: builder.query({
            query: () => "/authors",
            transformResponse: (response) => response?.authors,
        }),
    }),
});

export const { useFetchAuthorsQuery } = authorApiSlice;
