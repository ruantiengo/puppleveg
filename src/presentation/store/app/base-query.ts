import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setCredentials } from '../auth/auth-slice'

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:5050/api',
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    console.log('entra')

    const token = (getState() as any).auth.token
    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }
    return headers
  }
})

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)

  if ((result?.error).status === 403) {
    console.log('sending refresh token')
    // send refresh token to get new access token
    const refreshResult = await baseQuery('/refresh', api, extraOptions)
    console.log(refreshResult)
    if (refreshResult?.data) {
      const token = api.getState().auth.accessToken
      const refreshToken = api.getState().refreshToken
      // store the new token
      api.dispatch(setCredentials({ token, refreshToken }))
      // retry the original query with new access token
      result = await baseQuery(args, api, extraOptions)
    }
  }

  return result
}

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({})
})
