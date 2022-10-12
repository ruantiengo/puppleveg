import axios from 'axios'
import { Costumer } from '.'
import baseUrl from '../../helpers/baseUrl'

export const updateCostumer = async (cpf: string, employee: Costumer) => {
  return axios.put(`${baseUrl}/costumer/${cpf}`, employee, {
    headers: {
      authorization: localStorage.getItem('accessToken')
    }
  })
}
