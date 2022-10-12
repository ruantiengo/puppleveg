import { AccountModel } from '../../domain/entities/account'
import { InvalidCredentialsError, UnexpectedError } from '../../domain/errors'

import {
  Authentication,
  AuthenticationParams
} from '../../domain/usecases/authentication'
import { HttpClient, HttpStatusCode } from '../protocols/http-client'
import baseUrl from '../../presentation/helpers/baseUrl'

export class RemoteAuthentication implements Authentication {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient
  ) {
    this.httpClient = httpClient
    this.url = baseUrl + url
  }

  async auth(accountParams: AuthenticationParams): Promise<AccountModel> {
    const res = await this.httpClient.request({
      method: 'post',
      url: this.url,
      body: accountParams
    })
    switch (res.statusCode) {
      case HttpStatusCode.ok:
        return res.body
      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError()
      default:
        throw new UnexpectedError()
    }
  }
}
export namespace RemoteAuthentication {
  export type Model = Authentication.Model
}
