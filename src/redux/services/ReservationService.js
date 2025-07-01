// services/api/reservationApi.js
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

export const reservationApi = createApi({
  reducerPath: "reservationApi",
  baseQuery: customBaseQuery,
  tagTypes: ["Reservation"],
  endpoints: (builder) => ({
    getReservations: builder.query({
      query: () => "/Reservations",
    }),
    getReservationById: builder.query({
      query: (id) => `/Reservations/${id}`,
    }),
    addReservation: builder.mutation({
      query: (reservation) => ({
        url: "/Reservations",
        method: "POST",
        body: reservation,
      }),
    }),
    updateReservation: builder.mutation({
      query: ({ id, ...reservation }) => ({
        url: `/Reservations/${id}`,
        method: "PUT",
        body: reservation,
      }),
    }),
    deleteReservation: builder.mutation({
      query: (id) => ({
        url: `/Reservations/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetReservationsQuery,
  useGetReservationByIdQuery,
  useAddReservationMutation,
  useUpdateReservationMutation,
  useDeleteReservationMutation,
} = reservationApi;
