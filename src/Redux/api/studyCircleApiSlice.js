import { apiSlice } from "./apiSlice";

export const studyCircleApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    fetchStudyCircle: builder.query({
      query: (arg = {}) => {
        const { page, limit = 6 } = arg;

        let queryParams = new URLSearchParams();
        if (page) queryParams.append("page", page);
        if (page || limit) queryParams.append("limit", limit);

        return `/study-circle?${queryParams.toString()}`;
      },
      providesTags: ["study-circle"],
    }),

    get3StudyCircle: builder.query({
      query: () => `/study-circle/latest`,
      transformResponse: (response) => response?.data,
      providesTags: ["study-circle"],
    }),

    getSingleStudyCircle: builder.query({
      query: (id) => `/study-circle/${id}`,
      transformResponse: (response) => response?.data,
      providesTags: ["study-circle"],
    }),

    createStudyCircle: builder.mutation({
      query: (studyCircleData) => ({
        url: "/create/study-circle",
        method: "POST",
        body: studyCircleData,
      }),
      invalidatesTags: ["study-circle"],
    }),

    updateStudyCircle: builder.mutation({
      query: ({ studyCircleId, studyCircleData }) => ({
        url: `/study-circle/${studyCircleId}`,
        method: "PATCH",
        body: studyCircleData,
      }),
      invalidatesTags: ["study-circle"],
    }),

    deleteStudyCircle: builder.mutation({
      query: (studyCircleId) => ({
        url: `/study-circle/${studyCircleId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["study-circle"],
    }),
  }),
});

export const {
  useFetchStudyCircleQuery,
  useGet3StudyCircleQuery,
  useGetSingleStudyCircleQuery,
  useCreateStudyCircleMutation,
  useUpdateStudyCircleMutation,
  useDeleteStudyCircleMutation,
} = studyCircleApiSlice;
