import endpoints from "@/features/api/endpoints";
import {apiSlice} from "@/services";

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (body) => ({
                url: endpoints.login,
                method: "POST",
                body,
            }),
            }),
        register: builder.mutation({
            query: (body) => ({
                url: endpoints.register,
                method: "POST",
                body,
            })
        }),
        forgotPassword: builder.mutation({
            query: (body) => ({
                url: endpoints.forgotPassword,
                method: "POST",
                body,
            })
        }),
        resetPassword: builder.mutation({
            query: (body) => ({
                url: endpoints.resetPassword,
                method: "POST",
                body,
            })
        }),
        confirmPasswordReset: builder.mutation({
            query: (body) => ({
                url: endpoints.confirmPasswordReset,
                method: "POST",
                body,
            })
        }),
        verify: builder.mutation({
            query: (body) => ({
                url: endpoints.verify,
                method: "POST",
                body,
            })
        }),
        resendActivation: builder.mutation({
            query: (body) => ({
                url: endpoints.resendActivation,
                method: "POST",
                body,
            })
        }),
        registerAdmin: builder.mutation({
            query: (body) => ({
                url: endpoints.registerAdmin,
                method: "POST",
                body,
            })
        }),
        refresh: builder.mutation({
            query: (body) => ({
                url: endpoints.refresh,
                method: "POST",
                body,
            })
        }),
        getActivationToken: builder.mutation({
            query: (uuid) => ({
                url: endpoints.getActivationToken(uuid),
                method: "GET",
            })
        }),
        }),
})

export const {useLoginMutation, useRegisterMutation, useForgotPasswordMutation, useResetPasswordMutation, useConfirmPasswordResetMutation, useVerifyMutation, useResendActivationMutation, useRegisterAdminMutation, useRefreshMutation, useGetActivationTokenMutation} = authApi;