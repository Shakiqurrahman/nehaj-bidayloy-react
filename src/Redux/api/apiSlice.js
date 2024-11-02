import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../utils/config";
import { setAccessToken } from "../features/userSlice";

const baseQuery = fetchBaseQuery({
    baseUrl: `${API_URL}`,
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
        const token = getState().user.token;
        if (token) {
            headers.set("authorization", `Bearer ${token}`);
        }
        return headers;
    },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);
    console.log(result);
    

    if (result?.error?.originalStatus === 403) {
        console.log("sending refresh token");
        // send refresh token to get new access token
        const refreshResult = await baseQuery(
            "/auth/refresh",
            api,
            extraOptions
        );
        console.log(refreshResult);
        if (refreshResult?.data) {
            // store the new token
            api.dispatch(setAccessToken({ ...refreshResult.data }));
            // retry the original query with new access token
            result = await baseQuery(args, api, extraOptions);
        } else {
            // api.dispatch(logOut())
            console.log("successfully logged out");
        }
    }

    return result;
};

export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    endpoints: (builder) => ({}),
});
