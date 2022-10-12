import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { RemoteSignUp } from '../../../data/usecases/remote-signup'
import { SignUp } from '../../../domain/usecases/signup'
import { AxiosHttpClient } from '../../../infra/http/axios/axios-http-client'
import baseUrl from '../../helpers/baseUrl'
import { notify, success } from '../../helpers/toatisfy'

const useSignUp = () => {
  const navigate = useNavigate()

  const signUp = async (params: SignUp.Params) => {
    const httpClient = new AxiosHttpClient()
    const signUp = new RemoteSignUp(`${baseUrl}/signup`, httpClient)
    return await signUp.signUp(params)
  }
  return useMutation(signUp, {
    onSuccess: () => {
      success('Sucesso, agora digite o seu email e sua senha para continuar')
      navigate('/')
    },
    onError: ({ name, message }) => {
      notify(message)
    }
  })
}
export default useSignUp
