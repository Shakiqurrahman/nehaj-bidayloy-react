import { apiSlice } from "./apiSlice";

const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        fetchUserData: builder.query({
            query: () => "/user",
            transformResponse: (response) => response?.user,
        }),

        loginUser: builder.mutation({
            query: (credentials) => ({
                url: "/auth/login",
                method: "POST",
                body: credentials,
            }),
        }),

        registerUser: builder.mutation({
            query: (userData) => ({
                url: "/auth/register",
                method: "POST",
                body: userData,
            }),
        }),
    }),
});

export const {
    useFetchUserDataQuery,
    useLoginUserMutation,
    useRegisterUserMutation,
} = userApiSlice;
