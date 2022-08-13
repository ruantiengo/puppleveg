import { faker } from '@faker-js/faker'
import { HttpStatusCode } from '../../../src/data/protocols/http-client'
import { RemoteAuthentication } from '../../../src/data/usecases/remote-authentication'
import {
  InvalidCredentialsError,
  UnexpectedError
} from '../../../src/domain/errors'
import {
  mockAuthenticationModel,
  mockAuthenticationParams
} from '../mocks/authentication-mock'
import { HttpClientSpy } from '../mocks/http-client-mock'
type SutType = {
  sut: RemoteAuthentication
  httpClient: HttpClientSpy
}
const makeSut = (url = faker.internet.url()): SutType => {
  const httpClient = new HttpClientSpy<RemoteAuthentication.Model>()
  const sut = new RemoteAuthentication(url, httpClient)
  return { sut, httpClient }
}
describe('Remothe Authenticaiton', () => {
  test('should call httpClient with correct url', async () => {
    const url = faker.internet.url()
    const { sut, httpClient } = makeSut(url)
    const authenticationParams = mockAuthenticationParams()
    await sut.auth(authenticationParams)

    expect(httpClient.url).toBe(url)
    expect(httpClient.method).toBe('post')
    expect(httpClient.body).toEqual(authenticationParams)
  })
  test('should throws InvalidCredentialsError if HttpClient returns 401', () => {
    const { sut, httpClient } = makeSut()
    httpClient.response = {
      statusCode: HttpStatusCode.unauthorized
    }
    const promise = sut.auth(mockAuthenticationParams())
    expect(promise).rejects.toThrow(new InvalidCredentialsError())
  })
  test('should throws UnexpectedError if HttpClient returns 400', () => {
    const { sut, httpClient } = makeSut()
    httpClient.response = {
      statusCode: HttpStatusCode.badRequest
    }
    const promise = sut.auth(mockAuthenticationParams())
    expect(promise).rejects.toThrow(new UnexpectedError())
  })
  test('should throws UnexpectedError if HttpClient returns 500', () => {
    const { sut, httpClient } = makeSut()
    httpClient.response = {
      statusCode: HttpStatusCode.serverError
    }
    const promise = sut.auth(mockAuthenticationParams())
    expect(promise).rejects.toThrow(new UnexpectedError())
  })
  test('should throws UnexpectedError if HttpClient returns 403', () => {
    const { sut, httpClient } = makeSut()
    httpClient.response = {
      statusCode: HttpStatusCode.forbidden
    }
    const promise = sut.auth(mockAuthenticationParams())
    expect(promise).rejects.toThrow(new UnexpectedError())
  })
  test('should throws UnexpectedError if HttpClient returns 404', () => {
    const { sut, httpClient } = makeSut()
    httpClient.response = {
      statusCode: HttpStatusCode.notFound
    }
    const promise = sut.auth(mockAuthenticationParams())
    expect(promise).rejects.toThrow(new UnexpectedError())
  })
  test('Should return an Authentication.Model if HttpClient returns 200', async () => {
    const { sut, httpClient } = makeSut()
    const httpResult = mockAuthenticationModel()
    httpClient.response = {
      statusCode: HttpStatusCode.ok,
      body: httpResult
    }

    const account = await sut.auth(mockAuthenticationParams())

    expect(account).toEqual(httpResult)
  })
})
