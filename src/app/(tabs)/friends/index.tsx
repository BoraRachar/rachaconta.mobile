import { useCallback, useState } from 'react'
import { ActivityIndicator, FlatList, Text, View } from 'react-native'
import { useFocusEffect } from 'expo-router'

import { useAuthStore } from '@/src/store/useAuthStore'
import { useFriendStore } from '@/src/store/useFriendStore'

import {
  getEmailInvitations,
  getFriendsList,
  getPendingRequests,
} from './actions'

import SeeMoreLink from './components/SeeMoreLink.tsx'
import LinkToAddNewFriendsPage from './components/LinkToAddNewFriendsPage'
import EmptyListMessage from './components/EmptyListMessage'
import FriendItem from './components/FriendItem'

import { styles } from './styles'
import { verticalScale } from '@/src/utils/responsiveUtils'

export default function FriendPage() {
  const [isLoading, setIsLoading] = useState(false)

  const { userName, userCod } = useAuthStore()
  const {
    friendList,
    addFriendList,
    pendingInvitations,
    addPendingInvitations,
    emailInvitations,
    addEmailInvitations,
  } = useFriendStore()

  useFocusEffect(
    useCallback(() => {
      const fetchFriendList = async () => {
        setIsLoading(true)

        try {
          const friendsResponse = await getFriendsList(userCod)
          if (friendsResponse.statusCode === 200) {
            addFriendList(friendsResponse.data || [])
          } else {
            console.log('Lista de amigos vazia')
            addFriendList([])
          }

          const pendingResponse = await getPendingRequests(userCod)
          if (pendingResponse.statusCode === 200 && pendingResponse.data) {
            addPendingInvitations(pendingResponse.data)
          } else {
            console.log('Não há solicitações pendentes')
            addPendingInvitations([])
          }

          const emailResponse = await getEmailInvitations(userCod)
          if (emailResponse.statusCode === 200 && emailResponse.data) {
            addEmailInvitations(emailResponse.data)
          } else {
            console.log('Não há convites por e-mail')
            addEmailInvitations([])
          }
        } catch (error) {
          console.log('Erro ao carregar dados', error)
          console.log()
        } finally {
          setIsLoading(false)
        }
      }

      fetchFriendList()
    }, [userCod, addFriendList, addPendingInvitations, addEmailInvitations]),
  )

  if (isLoading) {
    return (
      <View
        style={[
          styles.container,
          { flex: 1, justifyContent: 'center', alignItems: 'center' },
        ]}
      >
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {/* Resumo do usuário */}
      <View style={styles.resumeContent}>
        <Text style={styles.text}>{`${userName}, você tem:`}</Text>
        <Text style={styles.text}>{`${friendList.length} amigos`}</Text>

        <View style={styles.containerText}>
          <Text
            style={styles.text}
          >{`${emailInvitations.length} convites enviados`}</Text>
          <SeeMoreLink text="Ver" initialTab="0" />
        </View>

        <View style={styles.containerText}>
          <Text style={styles.text}>
            {`${pendingInvitations.length} solicitações de amizade pendentes`}
          </Text>
          <SeeMoreLink text="Ver" initialTab="1" />
        </View>
      </View>

      {/* Link para pagina Adicionar Amigos */}
      <View style={{ marginTop: verticalScale(24) }}>
        <LinkToAddNewFriendsPage />
      </View>

      {/* Lista de amigos */}

      <View style={{ flex: 1 }}>
        {friendList.length === 0 ? (
          <EmptyListMessage title="Você ainda não tem amigos" />
        ) : (
          <FlatList
            data={friendList}
            renderItem={({ item }) => <FriendItem friend={item} />}
            keyExtractor={(item) => item.amigoId}
            extraData={friendList}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<Text style={styles.title}>Amigos</Text>}
          />
        )}
      </View>
    </View>
  )
}
