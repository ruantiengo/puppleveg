import { faker } from '@faker-js/faker'

import { AccountModel } from '../../../src/domain/entities/account'
export const mockAccountModel = (): AccountModel => ({
  accessToken: faker.datatype.uuid(),
  refreshToken: faker.datatype.uuid()
})
