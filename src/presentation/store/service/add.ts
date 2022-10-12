import axios from 'axios'
import { Service } from '.'
import baseUrl from '../../helpers/baseUrl'

export const addService = async (service: Service) => {
  return axios.post(`${baseUrl}/services`, service, {
    headers: {
      authorization: localStorage.getItem('accessToken')
    }
  })
}
