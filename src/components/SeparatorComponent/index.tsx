import { View, Text } from 'react-native'
import { styles } from './styles'

export default function SeparatorComponent() {
  return (
    <View style={styles.horizontalLineWithTextContainer}>
      <View style={styles.horizontalLine} />
      <Text style={styles.horizontalText}>OU</Text>
      <View style={styles.horizontalLine} />
    </View>
  )
}
