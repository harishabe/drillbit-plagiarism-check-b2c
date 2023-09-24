import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '@/app/utils/BaseUrl'
import { END_POINTS } from '@/app/utils/ApiUrl'

interface ILogin {
  username: string
  password: string
}

interface ISignUp {
  userName: string
  userEmail: string
  pswd: string
  ph_no: string
  address: string
  country: string
}

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    loginUser: builder.mutation<void, ILogin>({
      query: (data) => ({
        url: END_POINTS.LOGIN,
        method: 'POST',
        body: data,
      }),
    }),
    registerUser: builder.mutation<void, ISignUp>({
      query: (data) => ({
        url: END_POINTS.SIGN_UP,
        method: 'POST',
        body: data,
      }),
    }),
  }),
})

export const { useLoginUserMutation, useRegisterUserMutation } = authApi
