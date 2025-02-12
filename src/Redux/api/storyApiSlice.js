import { apiSlice } from "./apiSlice";

export const storyApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    fetchStories: builder.query({
      query: () => "/stories",
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
  }),
});

export const {
  useFetchStoriesQuery,
  useCreateStoryMutation,
  useUpdateStoryMutation,
  useDeleteStoryMutation,
} = storyApiSlice;
