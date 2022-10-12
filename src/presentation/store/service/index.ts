import { useMutation } from '@tanstack/react-query'

import { AxiosHttpClient } from '../../../infra/http/axios/axios-http-client'
import baseUrl from '../../helpers/baseUrl'
export type Service = {
  name: string
  whichspecies: 'cachorro' | 'gato' | 'passaro' | 'porco'
  value: number
  id?: number
}
const useService = () => {
  const req = async () => {
    const httpClient = new AxiosHttpClient()
    const accessToken = localStorage.getItem('accessToken')
    return await httpClient.request({
      method: 'get',
      url: `${baseUrl}/services`,
      headers: {
        authorization: accessToken
      }
    })
  }
  return useMutation(req)
}
export default useService
