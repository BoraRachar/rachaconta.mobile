import { useCallback, useState } from 'react'
import {
  Alert,
  FlatList,
  ListRenderItem,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { useLocalSearchParams } from 'expo-router'

import LinkToInviteByEmailPage from '../components/LinkToInviteByEmailPage'
import AvatarImageComponent from '@/src/components/AvatarImageComponent'

import { addNewFriend } from '../actions'

import PlusCircleIcon from '@/src/assets/images/plus-circle.svg'
import CheckIcon from '@/src/assets/images/check.svg'

import { styles } from '../styles'

type User = {
  amigoId: string
  userName: string
  email: string
  avatar: string
}

export default function FriendSearchResults() {
  const [isFriendAdded, setisFriendAdded] = useState(false)

  const { userList, userCod } = useLocalSearchParams<{
    userList: string
    userCod: string
  }>()
  const friendsList = JSON.parse(userList as string)

  const handleAddNewFriend = useCallback(
    async (amigoId: string) => {
      try {
        const response = await addNewFriend(userCod, amigoId)

        if (response.statusCode === 201) {
          setisFriendAdded(true)
          return
        }

        if (response.statusCode === 400) {
          Alert.alert('Usuario já adicionado')
        }
      } catch (error) {
        console.log('Erro ao adicionar amigo', error)
      }
    },
    [userCod],
  )

  const RenderFriendItem = useCallback<ListRenderItem<User>>(
    ({ item }) => {
      return (
        <View style={styles.renderItemContent}>
          <View>
            <AvatarImageComponent image={item.avatar} size={48} />
          </View>

          <View style={{ flex: 1 }}>
            <Text style={[styles.text, styles.textBold]}>
              {`@${item.userName}`}
            </Text>
            <Text style={styles.text}>{item.email}</Text>
          </View>

          <View>
            <TouchableOpacity
              onPress={() => handleAddNewFriend(item.amigoId)}
              accessibilityLabel="Adicionar amigo"
              accessibilityRole="button"
            >
              {isFriendAdded ? (
                <CheckIcon width={20} height={20} />
              ) : (
                <PlusCircleIcon width={20} height={20} />
              )}
            </TouchableOpacity>
          </View>
        </View>
      )
    },
    [handleAddNewFriend, isFriendAdded],
  )

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Encontramos alguns usuários com esse nome
      </Text>

      <View>
        <FlatList
          data={friendsList}
          keyExtractor={(item) => item.amigoId}
          renderItem={RenderFriendItem}
          ListFooterComponent={<LinkToInviteByEmailPage withTitle />}
        />
      </View>
    </View>
  )
}
