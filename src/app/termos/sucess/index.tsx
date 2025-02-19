import { Text, View } from 'react-native'
import { router } from 'expo-router'

import Header from '@/src/components/HeaderComponent'
import { ButtonCustomizer } from '@/src/components/ButtonCustomizer'

import SuccessCreateAccount from '@/src/assets/images/successCreateAccount.svg'

import { styles as globalStyles } from '@/src/app/styles'
import { styles } from '../styles'

export default function Sucess() {
  return (
    <View style={{ flex: 1 }}>
      <Header title="Sucesso" />

      <View style={{ flex: 1, justifyContent: 'space-between', padding: 24 }}>
        <View>
          <SuccessCreateAccount style={{ alignSelf: 'center' }} />
          <Text style={[styles.title, { marginTop: 22 }]}>
            Bem vindo ao Bora Rachar!
          </Text>
          <Text style={[styles.text, { marginTop: 8 }]}>
            Lembre-se de verificar seu e-mail para receber nossa atualizações e
            notificações dos seus grupos e amigos.
          </Text>
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
    </View>
  )
}
