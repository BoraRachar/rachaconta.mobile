import { create } from 'zustand'

interface Props {
  friendList: {
    amigoId: string
    imgUser: string
    nome: string
  }[]
  pendingInvitations: {
    aceite: boolean
    amigoId: string
    nome: string
    imgUser: string
  }[]
  emailInvitations: {
    idConvite: string
    nome: string
  }[]

  addFriendList: (friendList: []) => void
  addPendingInvitations: (pendingInvitations: []) => void
  addEmailInvitations: (emailInvitations: []) => void
}

export const useFriendStore = create<Props>((set) => ({
  friendList: [],
  pendingInvitations: [],
  emailInvitations: [],

  addFriendList: (friendList) => set({ friendList }),
  addPendingInvitations: (pendingInvitations) => set({ pendingInvitations }),
  addEmailInvitations: (emailInvitations) => set({ emailInvitations }),
}))
