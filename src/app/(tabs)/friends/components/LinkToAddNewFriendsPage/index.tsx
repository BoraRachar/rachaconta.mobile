import { Text, TouchableOpacity, View } from 'react-native'

import Plus from '@/src/assets/images/plus.svg'

import { styles } from './styles'
import { router } from 'expo-router'

export default function LinkToAddNewFriendsPage() {
  return (
    <View style={styles.containerButton}>
      <Text style={[styles.text, styles.textButton]}>Adicionar novo amigo</Text>

      <TouchableOpacity
        onPress={() => router.push('/friends/addNewFriendsPage')}
      >
        <View style={styles.addButton}>
          <Plus />
        </View>
      </TouchableOpacity>
    </View>
  )
}
