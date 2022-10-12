import axios from 'axios'
import baseUrl from '../../helpers/baseUrl'

export const deleteOrder = async (id: number) => {
  return axios.delete(`${baseUrl}/orders/${id}`, {
    headers: {
      authorization: localStorage.getItem('accessToken')
    }
  })
}
