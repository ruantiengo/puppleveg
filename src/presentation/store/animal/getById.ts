import axios from 'axios'
import baseUrl from '../../helpers/baseUrl'

export const getByCpf = async (cpf: string) => {
  return axios.get(`${baseUrl}/animals/${cpf}`, {
    headers: {
      authorization: localStorage.getItem('accessToken')
    }
  })
}
