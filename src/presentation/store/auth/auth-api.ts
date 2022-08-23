import { useMutation } from '@tanstack/react-query'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { RemoteAuthentication } from '../../../data/usecases/remote-authentication'

import { Authentication } from '../../../domain/usecases/authentication'
import { AxiosHttpClient } from '../../../infra/http/axios/axios-http-client'
import { setCredentials } from './auth-slice'
const useLogin = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const notify = (error: string) =>
    toast.error(error, {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    })
  const auth = async (params: Authentication.Params) => {
    try {
      const httpClient = new AxiosHttpClient()
      const authentication = new RemoteAuthentication(
        'http://localhost:5050/api/login',
        httpClient
      )
      const account = await authentication.auth(params)

      return account
    } catch (error) {
      notify(error.message)
      return error
    }
  }
  return useMutation(auth, {
    onSuccess: (res) => {
      console.log('entra aqui')

      dispatch(setCredentials(res))

      navigate('/home')
    },
    onError: () => {}
  })
}
export default useLogin
