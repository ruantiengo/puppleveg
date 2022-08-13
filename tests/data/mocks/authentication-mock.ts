import { faker } from '@faker-js/faker'

import { Authentication } from '../../../src/domain/usecases/authentication'
import { mockAccountModel } from '../../domain/mocks/account-model-mock'

export const mockAuthenticationParams = (): Authentication.Params => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})

export const mockAuthenticationModel = (): Authentication.Model =>
  mockAccountModel()

// export class AuthenticationSpy implements Authentication {
//   account = mockAuthenticationModel()
//   params = {} as Authentication.Params
//   callsCount = 0

//   async auth(params: Authentication.Params): Promise<Authentication.Model> {
//     this.params = params
//     this.callsCount++
//     return this.account
//   }
// }
