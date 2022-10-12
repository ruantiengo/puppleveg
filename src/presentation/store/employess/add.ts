import axios from 'axios'
import { Employee } from '.'
import baseUrl from '../../helpers/baseUrl'

export const addEmployee = async (employee: Employee) => {
  return axios.post(`${baseUrl}/employees`, employee, {
    headers: {
      authorization: localStorage.getItem('accessToken')
    }
  })
}
