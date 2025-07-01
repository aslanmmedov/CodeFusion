import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Əgər import işləmirsə, customBaseQuery-ni birbaşa buraya köçürün
const baseQuery = fetchBaseQuery({
  baseUrl: "https://nihadrs-001-site1.jtempurl.com/api",
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    headers.set("Content-Type", "application/json");
    return headers;
  },
});

const customBaseQuery = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    const refreshToken = localStorage.getItem("refreshToken");

    if (!refreshToken) {
      console.warn("Refresh token tapılmadı.");
      return result;
    }

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
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      window.location.href = "/login";
      console.log(`Refresh token uğursuz oldu: ${refreshResult.error}`);
    }
  }

  return result;
};

export const customerApi = createApi({
  reducerPath: "customerApi",
  baseQuery: customBaseQuery,
  tagTypes: ["Customer"],
  endpoints: (builder) => ({
    // Customer CRUD əməliyyatları
    getCustomers: builder.query({
      query: ({ page, size }) => ({
        url: "/Customers",
        method: "GET",
        params: { page, size },
      })
    }),

    getCustomerById: builder.query({
      query: (id) => ({
        url: `/Customers/${id}`,
        method: "GET",
      })
    }),

    addCustomer: builder.mutation({
      query: (newCustomer) => ({
        url: "/Customers",
        method: "POST",
        body: newCustomer,
      })
    }),

    updateCustomer: builder.mutation({
      query: ({ id, ...customer }) => ({
        url: `/Customers/${id}`,
        method: "PUT",
        body: customer,
      })
    }),

    deleteCustomer: builder.mutation({
      query: (id) => ({
        url: `/Customers/${id}`,
        method: "DELETE",
      })
    }),

  
  }),
});

export const {
  useGetCustomersQuery,
  useGetCustomerByIdQuery,
  useAddCustomerMutation,
  useUpdateCustomerMutation,
  useDeleteCustomerMutation,

} = customerApi;