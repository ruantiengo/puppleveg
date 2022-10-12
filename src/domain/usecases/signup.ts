import { AccountModel } from '../entities/account'

export type SignUpParams = {
  email: string
  password: string
}
export namespace SignUp {
  export type Params = {
    email: string
    cpf: string
    name: string
    password: string
  }

  export type Model = AccountModel
}
export interface SignUp {
  signUp(accountParams: SignUpParams): Promise<SignUp.Model>
}
