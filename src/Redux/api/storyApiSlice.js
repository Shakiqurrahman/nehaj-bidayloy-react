import { apiSlice } from "./apiSlice";

export const storyApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    fetchStories: builder.query({
      query: (arg = {}) => {
        const { page, limit, category = "", genre = "" } = arg;

        let queryParams = new URLSearchParams();
        if (category) queryParams.append("category", category);
        if (genre) queryParams.append("genre", genre);
        if (page) queryParams.append("page", page);
        if (page || limit) queryParams.append("limit", 2);

        return `/stories?${queryParams.toString()}`;
      },
      providesTags: ["story"],
    }),

    getMostReadStories: builder.query({
      query: (arg = {}) => {
        const { category = "", genre = "" } = arg;
        let queryParams = new URLSearchParams();
        if (category) queryParams.append("category", category);
        if (genre) queryParams.append("genre", genre);

        return `/stories/mostRead?${queryParams.toString()}`;
      },
      transformResponse: (response) => response?.data,
      providesTags: ["story"],
    }),

    getSingleStory: builder.query({
      query: (storyId) => `/story/${storyId}`,
      transformResponse: (response) => response?.data,
      providesTags: ["story"],
    }),

    getFeaturedStory: builder.query({
      query: () => `/stories/featured`,
      transformResponse: (response) => response?.data,
      providesTags: ["story"],
    }),

    getSelectedStoriesByCategory: builder.query({
      query: (categorySlug) => `/stories/latest?category=${categorySlug}`,
      transformResponse: (response) => response?.data,
      providesTags: ["story"],
    }),

    createStory: builder.mutation({
      query: (storyData) => ({
        url: "/create/story",
        method: "POST",
        body: storyData,
      }),
      invalidatesTags: ["story"],
    }),

    updateStory: builder.mutation({
      query: ({ storyId, storyData }) => ({
        url: `/story/${storyId}`,
        method: "PATCH",
        body: storyData,
      }),
      invalidatesTags: ["story"],
    }),

    deleteStory: builder.mutation({
      query: (storyId) => ({
        url: `/story/${storyId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["story"],
    }),

    createComment: builder.mutation({
      query: (commentData) => ({
        url: "/create/comment",
        method: "POST",
        body: commentData,
      }),
      invalidatesTags: ["story"],
    }),
  }),
});

export const {
  useFetchStoriesQuery,
  useGetSingleStoryQuery,
  useGetFeaturedStoryQuery,
  useGetSelectedStoriesByCategoryQuery,
  useCreateStoryMutation,
  useUpdateStoryMutation,
  useDeleteStoryMutation,
  useCreateCommentMutation,
  useGetMostReadStoriesQuery,
} = storyApiSlice;
