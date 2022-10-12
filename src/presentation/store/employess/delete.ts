import axios from 'axios'
import baseUrl from '../../helpers/baseUrl'

export const deleteEmployee = async (cpf: string) => {
  return axios.delete(`${baseUrl}/employees/${cpf}`, {
    headers: {
      authorization: localStorage.getItem('accessToken')
    }
  })
}
