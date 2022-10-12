import { useMutation } from '@tanstack/react-query'

import { AxiosHttpClient } from '../../../infra/http/axios/axios-http-client'
import baseUrl from '../../helpers/baseUrl'
export type Animal = {
  name: string
  fk_costumer_cpf: string
  species: 'cachorro' | 'gato' | 'passaro' | 'porco'
  breed: string
  id?: number
  owner?: string
}
const useAnimal = () => {
  const req = async () => {
    const httpClient = new AxiosHttpClient()
    const accessToken = localStorage.getItem('accessToken')
    return await httpClient.request({
      method: 'get',
      url: `${baseUrl}/animals`,
      headers: {
        authorization: accessToken
      }
    })
  }
  return useMutation(req)
}
export default useAnimal
