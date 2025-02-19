import { View } from 'react-native'
import { Link } from 'expo-router'

import { styles } from '../../styles'

export default function SeeMoreLink({
  text,
  initialTab,
}: {
  text: string
  initialTab: string
}) {
  return (
    <View>
      <Link
        href={`/friends/invitations?initialIndex=${initialTab}`}
        style={[styles.text, { textDecorationLine: 'underline' }]}
      >
        {text}
      </Link>
    </View>
  )
}
