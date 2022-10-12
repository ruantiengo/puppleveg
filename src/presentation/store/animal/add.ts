import axios from 'axios'
import { Animal } from '.'
import baseUrl from '../../helpers/baseUrl'

export const addAnimal = async (animal: Animal) => {
  return axios.post(`${baseUrl}/animals`, animal, {
    headers: {
      authorization: localStorage.getItem('accessToken')
    }
  })
}
