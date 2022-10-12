import { createSlice } from '@reduxjs/toolkit'
type AuthType = {
  accessToken: string
  name: string
}

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    accessToken: '',
    name: ''
  } as AuthType,
  reducers: {
    setCredentials: (state, action) => {
      const { accessToken, name } = action.payload as AuthType
      if (accessToken) {
        localStorage.setItem('accessToken', accessToken)
        localStorage.setItem('username', name)
      }
    }
  }
})

export const { setCredentials } = authSlice.actions

export default authSlice.reducer
export const selectCurrentToken = (state: any) =>
  localStorage.getItem('accessToken')
