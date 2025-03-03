import { apiSlice } from "./apiSlice";

export const authorApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    fetchAuthors: builder.query({
      query: (arg = {}) => {
        const { page, limit } = arg;

        let queryParams = new URLSearchParams();
        if (page) queryParams.append("page", page);
        if (page || limit) queryParams.append("limit", 9);

        return `/authors?${queryParams.toString()}`;
      },
      providesTags: ["authors"],
    }),
    createAuthor: builder.mutation({
      query: (authorData) => ({
        url: "/create/author",
        method: "POST",
        body: authorData,
      }),
      invalidatesTags: ["authors"],
    }),
    updateAuthor: builder.mutation({
      query: ({ authorId, authorData }) => ({
        url: `/author/${authorId}`,
        method: "PATCH",
        body: authorData,
      }),
      invalidatesTags: ["authors"],
    }),
    deleteAuthor: builder.mutation({
      query: (authorId) => ({
        url: `/author/${authorId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["authors"],
    }),
  }),
});

export const {
  useFetchAuthorsQuery,
  useCreateAuthorMutation,
  useUpdateAuthorMutation,
  useDeleteAuthorMutation,
} = authorApiSlice;
