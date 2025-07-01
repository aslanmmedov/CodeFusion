// services/api/roomApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://nihadrs-001-site1.jtempurl.com/api",
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("accessToken");
    if (token) headers.set("Authorization", `Bearer ${token}`);
    headers.set("Content-Type", "application/json");
    return headers;
  },
});

const customBaseQuery = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error?.status === 401) {
    const refreshToken = localStorage.getItem("refreshToken");
    if (!refreshToken) return result;

    const refreshResult = await baseQuery(
      {
        url: "/Auth/RefreshTokenLogin",
        method: "POST",
        body: { refreshToken },
      },
      api,
      extraOptions
    );

    if (refreshResult.data) {
      localStorage.setItem("accessToken", refreshResult.data.accessToken);
      localStorage.setItem("refreshToken", refreshResult.data.refreshToken);
      result = await baseQuery(args, api, extraOptions);
    } else {
      localStorage.clear();
      window.location.href = "/login";
    }
  }

  return result;
};

export const roomApi = createApi({
  reducerPath: "roomApi",
  baseQuery: customBaseQuery,
  tagTypes: ["Room"],
  endpoints: (builder) => ({
    getRooms: builder.query({
      query: () => "/Rooms",
    }),
    getRoomById: builder.query({
      query: (id) => `/Rooms/${id}`,
    }),
    addRoom: builder.mutation({
      query: (room) => ({
        url: "/Rooms",
        method: "POST",
        body: room,
      }),
    }),
    updateRoom: builder.mutation({
      query: ({ id, ...room }) => ({
        url: `/Rooms/${id}`,
        method: "PUT",
        body: room,
      }),
    }),
    deleteRoom: builder.mutation({
      query: (id) => ({
        url: `/Rooms/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetRoomsQuery,
  useGetRoomByIdQuery,
  useAddRoomMutation,
  useUpdateRoomMutation,
  useDeleteRoomMutation,
} = roomApi;
