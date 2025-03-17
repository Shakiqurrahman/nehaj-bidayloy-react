import { apiSlice } from "./apiSlice";

export const noticeApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    fetchNotice: builder.query({
      query: (arg = {}) => {
        const { page, limit = 6 } = arg;

        let queryParams = new URLSearchParams();
        if (page) queryParams.append("page", page);
        if (page || limit) queryParams.append("limit", limit);

        return `/notices?${queryParams.toString()}`;
      },
      providesTags: ["notice"],
    }),

    get3Notice: builder.query({
      query: () => `/notices/latest`,
      transformResponse: (response) => response?.data,
      providesTags: ["notice"],
    }),

    createNotice: builder.mutation({
      query: (noticeData) => ({
        url: "/create/notice",
        method: "POST",
        body: noticeData,
      }),
      invalidatesTags: ["notice"],
    }),

    updateNotice: builder.mutation({
      query: ({ noticeId, noticeData }) => ({
        url: `/notices/${noticeId}`,
        method: "PATCH",
        body: noticeData,
      }),
      invalidatesTags: ["notice"],
    }),

    deleteNotice: builder.mutation({
      query: (noticeId) => ({
        url: `/notices/${noticeId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["notice"],
    }),
  }),
});

export const {
  useFetchNoticeQuery,
  useGet3NoticeQuery,
  useCreateNoticeMutation,
  useUpdateNoticeMutation,
  useDeleteNoticeMutation,
} = noticeApiSlice;
