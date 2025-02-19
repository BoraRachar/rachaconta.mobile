import { Pressable, Text, View } from 'react-native'
import { useRouter } from 'expo-router'

import CloseFramer from '@/src/assets/images/closeFrame.svg'
import ResetPasswordSucess from '@/src/assets/images/reset-password-sucess.svg'
import { ButtonCustomizer } from '@/src/components/ButtonCustomizer'

import { styles as globalStyles } from '@/src/app/styles'
import { styles } from './styles'

export default function Sucess() {
  const router = useRouter()

  return (
    <View style={{ flex: 1, justifyContent: 'space-between', padding: 24 }}>
      <View style={{ paddingVertical: 25, alignSelf: 'flex-end' }}>
        <Pressable onPress={() => router.replace('/')}>
          {<CloseFramer />}
        </Pressable>
      </View>

      <View style={{ alignItems: 'center' }}>
        <View>
          <ResetPasswordSucess />
        </View>

        <View style={{ marginTop: 42 }}>
          <Text style={styles.subtitle}>Senha redefinida com sucesso!</Text>
          <Text style={styles.description}>
            Enviaremos uma notificação por e-mail confirmando a criação de uma
            nova senha.
          </Text>
        </View>
      </View>

      <View>
        <ButtonCustomizer.Root
          type="primary"
          customStyles={globalStyles.primaryButton}
          onPress={() => router.push('/login')}
        >
          <ButtonCustomizer.Title
            title="Fazer Login"
            customStyles={globalStyles.primaryButtonText}
          />
        </ButtonCustomizer.Root>
      </View>
    </View>
  )
}
