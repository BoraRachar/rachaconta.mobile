import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { router } from 'expo-router'

import Plus from '@/src/assets/images/plus.svg'

export default function Groups() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meus Grupos</Text>

      <View>
        <View style={styles.containerButton}>
          <Text style={styles.text}>Criar novo grupo</Text>

          <TouchableOpacity onPress={() => router.push('/groups/newGroup')}>
            <View style={styles.addButton}>
              <Plus />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
