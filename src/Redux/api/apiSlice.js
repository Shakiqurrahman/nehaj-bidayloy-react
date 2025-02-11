import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../utils/config";
import { logout, setAccessToken } from "../features/userSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: `${API_URL}`,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = getState()?.user?.accessToken;
    console.log(token);

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithRefreshToken = async (args, api, extraOptions) => {
  // Attempt the initial request
  let result = await baseQuery(args, api, extraOptions);

  // Check for a 403 response, meaning token may be expired
  if (result?.error?.status === 403) {
    try {
      // Request a new token from the refresh endpoint
      const refreshResult = await fetch(`${API_URL}/auth/refresh-token`, {
        method: "POST",
        credentials: "include",
      });

      const data = await refreshResult.json();

      // If a new token is provided, dispatch it to the Redux store
      if (data?.token) {
        api.dispatch(setAccessToken(data?.token));

        // Retry the original request with the new token
        result = await baseQuery(args, api, extraOptions);
      } else {
        api.dispatch(logout());
        console.log(
          "Refresh token not found or invalid. Redirecting to login..."
        );
      }
    } catch (error) {
      console.error("Failed to refresh token:", error);
    }
  }

  return result;
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithRefreshToken,
  keepUnusedDataFor: 60,
  // refetchOnFocus: true,
  refetchOnMountOrArgChanges: true,
  tagTypes: ["category", "genre", "authors"],
  endpoints: () => ({}),
});
