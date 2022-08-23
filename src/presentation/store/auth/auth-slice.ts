import { createSlice } from '@reduxjs/toolkit'
type AuthType = {
  accessToken: string
  refreshToken: {
    id: string
    userId: string
    expiresIn: number
  }
}

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    accessToken: '',
    refreshToken: {}
  } as AuthType,
  reducers: {
    setCredentials: (state, action) => {
      const { accessToken, refreshToken } = action.payload as AuthType
      localStorage.setItem('accessToken', accessToken)
      localStorage.setItem('refreshToken', refreshToken.id)
    }
  }
})

export const { setCredentials } = authSlice.actions

export default authSlice.reducer
export const selectCurrentToken = (state: any) =>
  localStorage.getItem('accessToken')
