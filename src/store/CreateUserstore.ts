import { create } from 'zustand'
import { UserData } from '../interfaces/types'

interface CreateUserStore {
  user: UserData
  addUser: (userData: Partial<UserData>) => void
}

const initialState: UserData = {
  nome: '',
  email: '',
  usuario: '',
  password: '',
  termosUso: false,
  politicasPrivacidade: false,
}

const useStore = create<CreateUserStore>((set) => ({
  user: { ...initialState },
  addUser: (userData) =>
    set((state) => ({ user: { ...state.user, ...userData } })),
}))

export default useStore
