import { apiSlice } from "./apiSlice";

const dashboardApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOverAllData: builder.query({
      query: () => "/overAllData",
      transformResponse: (response) => response?.data,
      providesTags: ["dashboard"],
    }),
  }),
});

export const { useGetOverAllDataQuery } = dashboardApiSlice;
