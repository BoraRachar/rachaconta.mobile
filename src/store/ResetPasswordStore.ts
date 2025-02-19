import { create } from 'zustand'
import { ResetPasswordData } from '@/src/interfaces/types'

interface ResetPasswordStore {
  resetPassword: ResetPasswordData
  setResetPassword: (resetPasswordData: Partial<ResetPasswordData>) => void
}

const initialState: ResetPasswordData = {
  email: '',
  code: 0,
  novaSenha: '',
  confirmacaoSenha: '',
}

const resetPasswordStore = create<ResetPasswordStore>((set) => ({
  resetPassword: { ...initialState },
  setResetPassword: (resetPasswordData) =>
    set((state) => ({
      resetPassword: { ...state.resetPassword, ...resetPasswordData },
    })),
}))

export default resetPasswordStore
