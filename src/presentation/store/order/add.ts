import axios from 'axios'
import { Order } from '.'
import baseUrl from '../../helpers/baseUrl'

export const addOrders = async (order: Order) => {
  return axios.post(`${baseUrl}/orders`, order, {
    headers: {
      authorization: localStorage.getItem('accessToken')
    }
  })
}
