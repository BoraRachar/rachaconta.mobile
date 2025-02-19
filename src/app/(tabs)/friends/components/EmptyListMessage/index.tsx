import { Text, View } from 'react-native'
import { Link } from 'expo-router'

import { styles } from '../../styles'

export default function EmptyListMessage({ title }: { title: string }) {
  function LinkToAddNewFriendsPage() {
    return (
      <Link href="/friends/addNewFriendsPage">
        <Text style={[styles.text, styles.textBold]}>
          adicionar novo amigos
        </Text>
      </Link>
    )
  }

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16,
      }}
    >
      <Text style={[styles.text, styles.textBold, { textAlign: 'center' }]}>
        {title}
      </Text>

      <Text style={[styles.text, { marginTop: 10, textAlign: 'center' }]}>
        Clique em <LinkToAddNewFriendsPage /> para enviar convite para alguém
        que você conhece
      </Text>
    </View>
  )
}
