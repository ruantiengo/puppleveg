import { AccountModel } from '../../domain/entities/account'
import { InvalidCredentialsError, UnexpectedError } from '../../domain/errors'
import { AlreadyInUseError } from '../../domain/errors/already-in-use-error'
import { SignUp, SignUpParams } from '../../domain/usecases/signup'
import { HttpClient, HttpStatusCode } from '../protocols/http-client'

export class RemoteSignUp implements SignUp {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient
  ) {
    this.httpClient = httpClient
    this.url = url
  }

  async signUp(accountParams: SignUpParams): Promise<AccountModel> {
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
      case HttpStatusCode.badRequest:
        throw new AlreadyInUseError(res.body.name)
      default:
        throw new UnexpectedError()
    }
  }
}
