import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Access Token-i header-ə əlavə etmək üçün baseQuery
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

// Refresh token logic
export const customBaseQuery = async (args, api, extraOptions) => {
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

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: customBaseQuery,
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: "/Auth/Login",
        method: "POST",
        body: credentials,
      }),
    }),

    addUser: builder.mutation({
      query: (newUser) => ({
        url: "/Users",
        method: "POST",
        body: newUser,
      }),
    }),

    confirmEmail: builder.mutation({
      query: ({ userId, token }) => ({
        url: `/Auth/confirm-email`,
        method: "POST",
        body: { userId, token },
      }),
    }),
    forgotPassword: builder.mutation({
      query: (email) => ({
        url: "/Auth/email-password-reset",
        method: "POST",
        body: email,
      }),
    }),
    verifyForgotPassword: builder.mutation({
      query: ({ userId, resetToken }) => ({
        url: "/Auth/email-verify-reset-token",
        method: "POST",
        body: { userId, resetToken },
      }),
    }),
     superAdminVerifyPAsw: builder.mutation({
      query: ({ email, resetToken }) => ({
        url: "/Auth/super-admin-verify-set-password-token",
        method: "POST",
        body: { email, resetToken },
      }),
    }),
    UpdatePassword: builder.mutation({
      query: (data) => ({
        url: '/Users/update-password',
        method: 'POST',
        body: data,
      }),
    }),
    getUsers: builder.query({
      query: ({ page, size }) => ({
        url: "/Users",
        method: "GET",
        params: { page, size },
      }),
    }),
     loginSendOtpEmail: builder.mutation({
      query: (email) => ({
        url: "/Auth/login-send-otp-to-email",
        method: "POST",
        body: {email},
      }),
    }),
    loginSendOtpVerify: builder.mutation({
      query: (otp) => ({
        url: "/Auth/login-verify-otp-email",
        method: "POST",
        body: otp ,
      }),
    }),
    LoginSendOtpPhone:builder.mutation({
      query: (number) => ({
        url: "/Auth/login-send-otp-to-number",
        method: "POST",
        body: {number} ,
      }),
    }),
     loginSendOtpVerifyNumber: builder.mutation({
      query: (otp) => ({
        url: "/Auth/login-verify-otp-number",
        method: "POST",
        body: otp ,
      }),
    }),
  }),
})

export const {
  useLoginUserMutation,
  useAddUserMutation,
  useConfirmEmailMutation,
  useForgotPasswordMutation,
  useVerifyForgotPasswordMutation,
  useGetUsersQuery,
  useUpdatePasswordMutation,
  useLoginSendOtpEmailMutation,
  useLoginSendOtpVerifyMutation,
  useLoginSendOtpPhoneMutation,
  useLoginSendOtpVerifyNumberMutation,
  useSuperAdminVerifyPAswMutation

} = userApi;
