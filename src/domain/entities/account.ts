export type AccountModel = {
  accessToken: string
  refreshToken: {
    id: string
    userId: string
    expiresIn: number
  }
}
