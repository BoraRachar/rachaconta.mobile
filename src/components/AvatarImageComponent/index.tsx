import { theme } from '@/src/theme'
import { Image, StyleSheet, View } from 'react-native'

import UserIcon from '@/src/assets/images/user.svg'

type AvatarImageComponentProps = {
  image?: string
  size?: number
}

export default function AvatarImageComponent({
  image,
  size = 48,
}: AvatarImageComponentProps) {
  return (
    <View>
      {image ? (
        <Image
          source={{ uri: image }}
          alt="avatar do usuario"
          style={styles.avatarImage}
          width={size}
          height={size}
        />
      ) : (
        <View style={styles.avatarContainer}>
          <UserIcon width={24} height={24} />
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  avatarImage: {
    borderRadius: 50,
    resizeMode: 'cover',
  },
  avatarContainer: {
    backgroundColor: theme.colors.third,
    borderRadius: 50,
    padding: 14,
  },
})
