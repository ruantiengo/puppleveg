import axios from 'axios'
import baseUrl from '../../helpers/baseUrl'

export const deleteService = async (id: number) => {
  return axios.delete(`${baseUrl}/services/${id}`, {
    headers: {
      authorization: localStorage.getItem('accessToken')
    }
  })
}
