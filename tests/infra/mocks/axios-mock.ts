import axios from 'axios'
import { faker } from '@faker-js/faker'
jest.mock('axios')

export const mockHttpResponse = (): any => ({
  data: faker.helpers.objectValue({ test: faker.internet.emoji }),
  status: faker.datatype.number()
})

export const mockAxios = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>

  mockedAxios.request.mockClear().mockResolvedValue(mockHttpResponse())

  return mockedAxios
}
