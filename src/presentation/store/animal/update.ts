import axios from 'axios'
import { Animal } from '.'
import baseUrl from '../../helpers/baseUrl'

export const updateAnimal = async (id: number, animal: Animal) => {
  return axios.put(`${baseUrl}/animals/${id}`, animal, {
    headers: {
      authorization: localStorage.getItem('accessToken')
    }
  })
}
