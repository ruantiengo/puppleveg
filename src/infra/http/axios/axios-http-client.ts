import axios from 'axios'
import {
  HttpClient,
  HttpRequest,
  HttpResponse
} from '../../../data/protocols/http-client'

export class AxiosHttpClient implements HttpClient {
  async request(data: HttpRequest): Promise<HttpResponse> {
    let axiosResponse = {} as any
    try {
      axiosResponse = await axios.request({
        url: data.url,
        method: data.method,
        data: data.body,
        headers: data.headers
      })
    } catch (error) {
      const formatError = error as any
      axiosResponse = formatError.response
    }
    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data
    }
  }
}
