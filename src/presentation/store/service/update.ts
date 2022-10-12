import axios from 'axios'
import { Service } from '.'
import baseUrl from '../../helpers/baseUrl'

export const updateService = async (id: number, service: Service) => {
  return axios.put(`${baseUrl}/services/${id}`, service, {
    headers: {
      authorization: localStorage.getItem('accessToken')
    }
  })
}
