import { useMutation } from '@tanstack/react-query'

import { AxiosHttpClient } from '../../../infra/http/axios/axios-http-client'
import baseUrl from '../../helpers/baseUrl'
export type Costumer = {
  name: string
  cpf: string
  address: string
  phone: string
}
const useCostumer = () => {
  const req = async () => {
    const httpClient = new AxiosHttpClient()
    const accessToken = localStorage.getItem('accessToken')
    return await httpClient.request({
      method: 'get',
      url: `${baseUrl}/costumers`,
      headers: {
        authorization: accessToken
      }
    })
  }
  return useMutation(req)
}
export default useCostumer
