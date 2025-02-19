import { create } from 'zustand'
import { SecureStoreUtils } from '@/src/utils/secureStoreUtils'

interface AuthState {
  userName: string | null
  userCod: string | null
  isAuthenticated: boolean
  login: (
    accessToken: string,
    userName: string,
    userCod: string,
  ) => Promise<void>
  logout: () => Promise<void>
  initializeAuthState: () => Promise<void>
}

export const useAuthStore = create<AuthState>((set) => ({
  userName: null,
  userCod: null,
  isAuthenticated: false,

  login: async (accessToken, userName, userCod) => {
    if (!accessToken || !userName || !userCod) {
      console.error('Login falhou: dados de autenticação inválidos')
      return
    }

    await SecureStoreUtils.setItem('acessToken', accessToken)
    set({ userName, userCod, isAuthenticated: true })
  },

  logout: async () => {
    await SecureStoreUtils.deleteItem('acessToken')
    set({ userName: null, userCod: null, isAuthenticated: false })
  },

  initializeAuthState: async () => {
    const accessToken = await SecureStoreUtils.getItem('acessToken')
    if (accessToken) {
      set({ isAuthenticated: true })
    }
  },
}))
