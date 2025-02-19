import { Pressable, Text, View } from 'react-native'
import { router } from 'expo-router'
import { verticalScale } from '@/src/utils/responsiveUtils'

import EmailIcon from '@/src/assets/images/email.svg'

import { styles } from '../../styles'

export default function LinkToInviteByEmailPage({
  withTitle = false,
}: {
  withTitle?: boolean
}) {
  return (
    <View>
      <View style={{ marginTop: verticalScale(12) }}>
        <Pressable
          style={styles.inviteButton}
          onPress={() => router.push('/friends/emailInvitationPage')}
        >
          <View style={styles.iconContainer}>
            <EmailIcon width={24} height={24} />
          </View>
          <View>
            {withTitle && (
              <Text style={[styles.text, styles.textBold]}>
                Não encontrou seu amigo no app?
              </Text>
            )}
            <Text style={styles.text}>Enviar convite por e-mail</Text>
          </View>
        </Pressable>
      </View>
    </View>
  )
}
