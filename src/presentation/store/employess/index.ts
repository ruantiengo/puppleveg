import { useMutation } from '@tanstack/react-query'

import { AxiosHttpClient } from '../../../infra/http/axios/axios-http-client'
import baseUrl from '../../helpers/baseUrl'
export type Employee = {
  name: string
  profession: string
  phone: string
  salary: number
  cpf: string
}
const useEmployes = () => {
  const req = async () => {
    const httpClient = new AxiosHttpClient()
    const accessToken = localStorage.getItem('accessToken')
    return await httpClient.request({
      method: 'get',
      url: `${baseUrl}/employees`,
      headers: {
        authorization: accessToken
      }
    })
  }
  return useMutation(req)
}
export default useEmployes
