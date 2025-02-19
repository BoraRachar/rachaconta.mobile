import { axiosPrivateClient } from '@/src/utils/axios'

export const searchUser = async (email: string, userCod: string | null) => {
  const { data } = await axiosPrivateClient.get('user/list-usuarios', {
    params: { email, userCod },
  })
  return data
}

export const addNewFriend = async (
  userCod: string | string[],
  amigoId: string,
) => {
  const { data } = await axiosPrivateClient.post('amizade/add-amigo', {
    userCod,
    amigoId,
  })

  return data
}

export const getFriendsList = async (userCod: string | null) => {
  const { data } = await axiosPrivateClient.get('amizade/lista-amizades', {
    params: { userCod, 'metaData.pageNumber': 1, 'metaData.pageSize': 10 },
  })
  return data
}

export const getPendingRequests = async (userCod: string | null) => {
  const { data } = await axiosPrivateClient.get(
    'amizade/lista-pendencias-amizades',
    {
      params: { userCod, 'metaData.pageNumber': 1, 'metaData.pageSize': 10 },
    },
  )
  return data
}

export const getEmailInvitations = async (userCod: string | null) => {
  const { data } = await axiosPrivateClient.get('convite/lista-convites', {
    params: { userCod },
  })
  return data
}
export const removeEmailInvitation = async (idConvite: string) => {
  const { data } = await axiosPrivateClient.delete('convite/deletar', {
    params: { idConvite },
  })

  return data
}

export const resendEmailInvitations = async (idConvite: string) => {
  const { data } = await axiosPrivateClient.post('convite/reenviar', {
    params: { idConvite },
  })

  return data
}

export const acceptPendingRequest = async (
  userCod: string | null,
  amigoId: string,
) => {
  const { data } = await axiosPrivateClient.post('amizade/aceite-amizade', {
    userCod,
    amigoId,
  })

  return data
}

export const refusedPendingRequest = async (
  userCod: string | null,
  amigoId: string,
) => {
  const { data } = await axiosPrivateClient.delete('amizade/recusar-amizade', {
    data: { userCod, amigoId },
  })

  return data
}
