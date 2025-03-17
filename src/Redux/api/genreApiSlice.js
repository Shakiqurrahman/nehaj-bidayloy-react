import { apiSlice } from "./apiSlice";

const genreApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getGenres: builder.query({
      query: () => "/genres",
      transformResponse: (response) => response?.genres,
      providesTags: ["genre"],
    }),

    createGenre: builder.mutation({
      query: (genreData) => ({
        url: "create/genre",
        method: "POST",
        body: genreData,
      }),
      invalidatesTags: ["genre"],
    }),

    updateGenre: builder.mutation({
      query: ({ genreId, genreData }) => ({
        url: `/genre/${genreId}`,
        method: "PATCH",
        body: genreData,
      }),
      invalidatesTags: ["genre"],
    }),

    deleteGenre: builder.mutation({
      query: (genreId) => ({
        url: `/genre/${genreId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["genre"],
    }),

    getGenreBanner: builder.query({
      query: (args = {}) => {
        const { category, genre } = args;

        let queryParams = new URLSearchParams();
        if (category) queryParams.append("category", category);
        if (genre) queryParams.append("genre", genre);

        return `/genre/banner?${queryParams.toString()}`;
      },

      transformResponse: (response) => response?.data,
    }),
  }),
});

export const {
  useGetGenresQuery,
  useCreateGenreMutation,
  useUpdateGenreMutation,
  useDeleteGenreMutation,
  useGetGenreBannerQuery,
} = genreApiSlice;
