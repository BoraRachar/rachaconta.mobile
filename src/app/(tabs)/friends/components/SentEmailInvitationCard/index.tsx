import { useState } from 'react'
import { Text, View } from 'react-native'

import RemoveEmailModal from '../Modais/removeEmailModal'
import ResendEmailModal from '../Modais/ResendEmailModal'
import AvatarImageComponent from '@/src/components/AvatarImageComponent'

import { useFriendStore } from '@/src/store/useFriendStore'
import { removeEmailInvitation, resendEmailInvitations } from '../../actions'

import Email from '@/src/assets/images/e-mail.svg'
import Trash from '@/src/assets/images/trash.svg'

import { styles } from '../../styles'
import ModalComponent from '@/src/components/ModalComponent'

type SentInvitationCardProps = {
  friend: {
    imgUser?: string
    nome: string
    idConvite: string
  }
}

export default function SentInvitationCard({
  friend,
}: SentInvitationCardProps) {
  const [removeModalVisible, setRemoveModalVisible] = useState(false)
  const [resendEmailModalVisible, setResendEmailModalVisible] = useState(false)
  const { emailInvitations, addEmailInvitations } = useFriendStore()

  const handleRemoveInvitation = async (id: string) => {
    try {
      const response = await removeEmailInvitation(id)

      if (response.statusCode === 204) {
        const filter = emailInvitations.filter((item) => item.idConvite !== id)
        addEmailInvitations(filter)
        setRemoveModalVisible(false)
      }
    } catch (error) {
      setRemoveModalVisible(false)
      console.log('Erro ao remover convite', error)
    }
  }

  const handleResendEmail = async (id: string) => {
    try {
      const response = await resendEmailInvitations(id)

      if (response.statusCode === 204) {
        console.log('Email enviado com sucesso')
        setResendEmailModalVisible(false)
        return
      }

      console.log('Não foi possivel enviar o email', response)
    } catch (error) {
      setResendEmailModalVisible(false)
      console.log('erro ao reenviar email', error)
    }
  }

  return (
    <View style={styles.invitationsCardcontainer}>
      <AvatarImageComponent image={friend.imgUser} size={48} />

      <View style={{ flex: 1, marginLeft: 16 }}>
        <Text style={[styles.text, styles.textBold]}>{friend.nome}</Text>
        <Text style={styles.text}>Enviado via E-mail</Text>
      </View>

      <View style={styles.invitationsCardContainerIcons}>
        <Email
          width={24}
          height={24}
          onPress={() => setResendEmailModalVisible(true)}
        />
        <Trash
          width={24}
          height={24}
          onPress={() => setRemoveModalVisible(true)}
        />
      </View>

      {/* Resend Modal */}
      <ModalComponent
        type="complete"
        title={`Reenviar convite para ${friend.nome}?`}
        description={`Enviaremos um e-mail para ${friend.nome} com o link do convite`}
        textButton1="Não Enviar"
        textButton2="Enviar"
        showModal={[resendEmailModalVisible, setResendEmailModalVisible]}
        onPress={() => handleResendEmail(friend.idConvite)}
      />

      {/* Remove Modal */}
      <ModalComponent
        type="complete"
        title={`Excluir convite de ${friend.nome}?`}
        description={`${friend.nome} não poderá mais fazer parte da sua lista de amigos`}
        textButton1="Não Excluir"
        textButton2="Excluir"
        showModal={[removeModalVisible, setRemoveModalVisible]}
        onPress={() => handleRemoveInvitation(friend.idConvite)}
      />

      {/* <RemoveEmailModal
        showModal={[removeModalVisible, setRemoveModalVisible]}
        friendName={friend.nome}
        idConvite={friend.idConvite}
        onPress={handleRemoveInvitation}
      />

      <ResendEmailModal
        showModal={[resendEmailModalVisible, setResendEmailModalVisible]}
        friendName={friend.nome}
        idConvite={friend.idConvite}
        onPress={handleResendEmail}
      /> */}
    </View>
  )
}
