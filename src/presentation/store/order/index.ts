import { useMutation } from '@tanstack/react-query'

import { AxiosHttpClient } from '../../../infra/http/axios/axios-http-client'
import baseUrl from '../../helpers/baseUrl'
export type Order = {
  fk_service_id: number
  id?: number
  fk_animal_id: number
  data: string
  status: string
  value: number
  nameservice?: string
  nameanimal?: string
}
const useOrders = () => {
  const req = async () => {
    const httpClient = new AxiosHttpClient()
    const accessToken = localStorage.getItem('accessToken')
    return await httpClient.request({
      method: 'get',
      url: `${baseUrl}/orders`,
      headers: {
        authorization: accessToken
      }
    })
  }
  return useMutation(req)
}
export default useOrders
