import axios from 'axios'
import { SecureStoreUtils } from '@/src/utils/secureStoreUtils'
import { Alert } from 'react-native'

const API_BASE_URL =
  process.env.EXPO_PUBLIC_API_BASE_URL ||
  'https://borarachar.microbr.online1/v1/'

export const axiosClient = axios.create({
  baseURL: API_BASE_URL,
  headers: { Accept: 'text/plan' }
})

export const axiosPrivateClient = axios.create({
  baseURL: API_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  // Authorization: `Bearer ${SecureStore.getItem('accessToken')}`,
  validateStatus: (status) => status >= 200 && status < 500,
})

axiosPrivateClient.interceptors.request.use(
  (config) => {
    try {
      const accessToken = SecureStoreUtils.getItem('accessToken')

      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
      }

      return config
    } catch (error) {
      console.error('Erro ao recuperar o token:', error)
      return Promise.reject(error)
    }
  },
  (error) => {
    console.error('Erro na configuração da requisição:', error)
    Promise.reject(error)
  },
)

//tratameto de erro da API quando não responder ou problemas de rede
axiosClient.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.code === 'ERR_NETWORK') {
      Alert.alert('Atenção', 'Não foi possível se conectar ao servidor, Verifique sua conexão com a internet')

    }

    return Promise.reject(error)
  },
)