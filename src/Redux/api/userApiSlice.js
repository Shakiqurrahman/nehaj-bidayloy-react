import { apiSlice } from "./apiSlice";

const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSearchSuggessions: builder.query({
      query: (arg = {}) => {
        const { searchTerm = "" } = arg;
        let queryParams = new URLSearchParams();
        if (searchTerm) queryParams.append("searchTerm", searchTerm);
        return `/search?${queryParams.toString()}`;
      },
      transformResponse: (response) => response?.data,
    }),

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

    logout: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
    }),
  }),
});

export const {
  useLazyGetSearchSuggessionsQuery,
  useFetchUserDataQuery,
  useLoginUserMutation,
  useRegisterUserMutation,
  useLogoutMutation,
} = userApiSlice;
