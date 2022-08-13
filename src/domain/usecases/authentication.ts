import { AccountModel } from '../entities/account'

export type AuthenticationParams = {
  email: string
  password: string
}
export interface Authentication {
  auth(accountParams: AuthenticationParams): Promise<Authentication.Model>
}

export namespace Authentication {
  export type Params = {
    email: string
    password: string
  }

  export type Model = AccountModel
}
