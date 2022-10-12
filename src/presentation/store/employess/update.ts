import axios from 'axios'
import { Employee } from '.'
import baseUrl from '../../helpers/baseUrl'

export const updateEmployee = async (cpf: string, employee: Employee) => {
  return axios.put(`${baseUrl}/employees/${cpf}`, employee, {
    headers: {
      authorization: localStorage.getItem('accessToken')
    }
  })
}
