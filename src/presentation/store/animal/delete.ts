import axios from 'axios'
import baseUrl from '../../helpers/baseUrl'

export const deleteAnimal = async (id: number) => {
  return axios.delete(`${baseUrl}/animals/${id}`, {
    headers: {
      authorization: localStorage.getItem('accessToken')
    }
  })
}
