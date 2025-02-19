import { useState } from 'react'
import { Text, View } from 'react-native'
import AvatarImageComponent from '@/src/components/AvatarImageComponent'

import { useAuthStore } from '@/src/store/useAuthStore'
import { useFriendStore } from '@/src/store/useFriendStore'
import { acceptPendingRequest, refusedPendingRequest } from '../../actions'
import ModalComponent from '@/src/components/ModalComponent'

import CheckGreen from '@/src/assets/images/check-green.svg'
import CloseRed from '@/src/assets/images/close-red.svg'

import { styles } from '../../styles'

type Props = {
  friend: {
    imgUser: string
    nome: string
    amigoId: string
  }
}

export default function PendingInvitationsCard({ friend }: Props) {
  const [simpleModalVisible, setSimpleModalVisible] = useState(false)
  const [completeModalVisible, setCompleteModalVisible] = useState(false)

  const { userCod } = useAuthStore()
  const { pendingInvitations, addPendingInvitations } = useFriendStore()

  const removePendingItemFromTheList = (amigoId: string) => {
    const filter = pendingInvitations.filter((item) => item.amigoId !== amigoId)
    return filter
  }

  const handleAcceptFriend = async (amigoId: string) => {
    try {
      await acceptPendingRequest(userCod, amigoId)
      const newList = removePendingItemFromTheList(amigoId)
      addPendingInvitations(newList)
      setSimpleModalVisible(false)
    } catch (error) {
      setSimpleModalVisible(false)
      console.log('Erro ao aceitar convite', error)
    }
  }

  const handleRefusedFriend = async (amigoId: string) => {
    try {
      await refusedPendingRequest(userCod, amigoId)
      const newList = removePendingItemFromTheList(amigoId)
      addPendingInvitations(newList)
      setCompleteModalVisible(false)
    } catch (error) {
      setCompleteModalVisible(false)
      console.log('Erro ao recusar convite', error)
    }
  }

  return (
    <View style={styles.invitationsCardcontainer}>
      <AvatarImageComponent image={friend.imgUser} size={48} />

      <View style={{ flex: 1, marginLeft: 16 }}>
        <Text style={styles.text}>{friend.nome}</Text>
      </View>

      <View style={styles.invitationsCardContainerIcons}>
        <CheckGreen
          width={24}
          height={24}
          onPress={() => setSimpleModalVisible(true)}
        />
        <CloseRed
          width={24}
          height={24}
          onPress={() => setCompleteModalVisible(true)}
        />
      </View>

      <ModalComponent
        type="simple"
        title={`${friend.nome} agora faz parte da sua lista de amigos`}
        textButton1="Fechar"
        onPress={() => handleAcceptFriend(friend.amigoId)}
        showModal={[simpleModalVisible, setSimpleModalVisible]}
      />

      <ModalComponent
        type="complete"
        title={`Recusar solicitação de amizade de ${friend.nome}`}
        description={`${friend.nome} não fará parte da sua lista de amigos.`}
        textButton1="Cancelar"
        textButton2="Recusar"
        onPress={() => handleRefusedFriend(friend.amigoId)}
        showModal={[completeModalVisible, setCompleteModalVisible]}
      />
    </View>
  )
}
