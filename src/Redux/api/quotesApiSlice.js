import { apiSlice } from "./apiSlice";

export const quotesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    fetchQuotes: builder.query({
      query: () => "/quotes",
      transformResponse: (response) => response?.quotes,
      providesTags: ["quotes"],
    }),
    createQuote: builder.mutation({
      query: (quotesData) => ({
        url: "/create/quotes",
        method: "POST",
        body: quotesData,
      }),
      invalidatesTags: ["quotes"],
    }),
    updateQuote: builder.mutation({
      query: ({ quoteId, quotesData }) => ({
        url: `/quotes/${quoteId}`,
        method: "PATCH",
        body: quotesData,
      }),
      invalidatesTags: ["quotes"],
    }),
    deleteQuote: builder.mutation({
      query: (quoteId) => ({
        url: `/quotes/${quoteId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["quotes"],
    }),
  }),
});

export const {
  useFetchQuotesQuery,
  useCreateQuoteMutation,
  useUpdateQuoteMutation,
  useDeleteQuoteMutation,
} = quotesApiSlice;
