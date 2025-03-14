import { apiSlice } from "./apiSlice";

const categoryApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "/categories",
      transformResponse: (response) => response?.categories,
      providesTags: ["category"],
    }),

    getCategoriesForHomePage: builder.query({
      query: () => "/categories/data",
      transformResponse: (response) => response?.data,
      providesTags: ["category"],
    }),

    createCategory: builder.mutation({
      query: (categoryData) => ({
        url: "create/category",
        method: "POST",
        body: categoryData,
      }),
      invalidatesTags: ["category"],
    }),

    updateCategory: builder.mutation({
      query: ({ categoryId, categoryData }) => ({
        url: `/category/${categoryId}`,
        method: "PATCH",
        body: categoryData,
      }),
      invalidatesTags: ["category"],
    }),

    deleteCategory: builder.mutation({
      query: (categoryId) => ({
        url: `/category/${categoryId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["category"],
    }),

    // category slider get api
    getCategorySlider: builder.query({
      query: () => "/category/slider",
      transformResponse: (response) => response?.categories,
      providesTags: ["category"],
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetCategoriesForHomePageQuery,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
  useGetCategorySliderQuery,
} = categoryApiSlice;
