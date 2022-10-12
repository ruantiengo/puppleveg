import axios from 'axios'
import baseUrl from '../../helpers/baseUrl'

export const deleteCostumer = async (cpf: string) => {
  return axios.delete(`${baseUrl}/costumers/${cpf}`, {
    headers: {
      authorization: localStorage.getItem('accessToken')
    }
  })
}
