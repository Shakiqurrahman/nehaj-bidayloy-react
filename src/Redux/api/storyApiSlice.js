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
        if (page || limit) queryParams.append("limit", 6);

        return `/stories?${queryParams.toString()}`;
      },
      providesTags: ["story"],
    }),

    getSingleStory: builder.query({
      query: (storyId) => `/story/${storyId}`,
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
  useCreateStoryMutation,
  useUpdateStoryMutation,
  useDeleteStoryMutation,
  useCreateCommentMutation,
} = storyApiSlice;
