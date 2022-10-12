import axios from 'axios'
import { Costumer } from '.'
import baseUrl from '../../helpers/baseUrl'

export const addCostumer = async (costumer: Costumer) => {
  return axios.post(`${baseUrl}/costumers`, costumer, {
    headers: {
      authorization: localStorage.getItem('accessToken')
    }
  })
}
