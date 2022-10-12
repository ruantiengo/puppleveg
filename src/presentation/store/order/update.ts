import axios from 'axios'
import { Order } from '.'
import baseUrl from '../../helpers/baseUrl'

export const updateOrders = async (id: number, service: Order) => {
  return axios.put(`${baseUrl}/orders/${id}`, service, {
    headers: {
      authorization: localStorage.getItem('accessToken')
    }
  })
}
