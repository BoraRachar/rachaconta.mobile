import { Text, View } from 'react-native'

import AvatarImageComponent from '@/src/components/AvatarImageComponent'

import User from '@/src/assets/images/user.svg'
import ChevronRight from '@/src/assets/images/chevron-arrow-right.svg'

import { styles } from '../../styles'

type Friend = {
  amigoId: string
  nome: string
  imgUser: string
}

export default function FriendItem({ friend }: { friend: Friend }) {
  const Avatar = friend.imgUser ? (
    <AvatarImageComponent image={friend.imgUser} size={48} />
  ) : (
    <View style={styles.avatarContainer}>
      <User width={24} height={24} />
    </View>
  )

  return (
    <View style={styles.contentFriend}>
      <View>{Avatar}</View>

      <View style={{ flex: 1 }}>
        <Text style={[styles.text, styles.textBold]}>{friend.nome}</Text>
        {/* <Text style={styles.text}>{`${friend.groups} grupos em comum`}</Text> */}
      </View>

      <View>
        <ChevronRight />
      </View>
    </View>
  )
}
