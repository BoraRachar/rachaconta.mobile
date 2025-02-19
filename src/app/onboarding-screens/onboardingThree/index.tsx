import { Text, View, Dimensions } from 'react-native'
import { Link, router } from 'expo-router'
import { styles } from '../styles'
import { styles as globalStyles } from '../../styles'
import { ButtonCustomizer } from '@/src/components/ButtonCustomizer'
import OnboardingScreenThreeImage from '../../../assets/images/OnboardingScreenThreeImage.svg'
import ArrowBack from '../../../assets/images/arrowBack.svg'

const windowHeight = Dimensions.get('window').height
const adaptativePaddingTopScreen = Number((windowHeight * 0.2 - 50).toFixed(0))

export default function OnboardingScreenThree() {
  return (
    <View style={{ position: 'relative' }}>
      <View
        style={{
          padding: 6,
          position: 'absolute',
          zIndex: 1,
        }}
      >
        <Link href="/onboarding-screens/onboardingTwo/">
          <ArrowBack />
        </Link>
      </View>
      <View
        style={[
          { paddingTop: adaptativePaddingTopScreen },
          styles.onboardingContainer,
        ]}
      >
        <View style={{ marginBottom: 15 }}>
          <View style={{ alignItems: 'center', marginBottom: 24 }}>
            <OnboardingScreenThreeImage />
          </View>
          <Text style={styles.Title}>
            Crie grupos, adicione{'\n'}amigos e escolha o jeito {'\n'}que
            prefere dividir
          </Text>
          <View style={styles.containerText}>
            <Text style={styles.Text}>
              Criando uma conta, você terá acesso a {'\n'}mais funcionalidades
              como grupos, {'\n'}histórico e novas modalidades de divisão.
            </Text>
          </View>
        </View>
        <View style={styles.linkContainer}>
          <ButtonCustomizer.Root
            type={'primary'}
            onPress={() => router.push('/')}
            customStyles={globalStyles.primaryButton}
          >
            <ButtonCustomizer.Title
              title="Criar minha conta"
              customStyles={globalStyles.primaryButtonText}
            />
          </ButtonCustomizer.Root>
          {/* <View style={styles.linkContainer}>
            <View style={styles.buttonArea}>
              <View style={globalStyles.textButton}>
                <Link push href="/">
                  <Text style={globalStyles.textButtonText}>
                    Usar a calculadora
                  </Text>
                </Link>
              </View>
            </View>
          </View> */}
        </View>
      </View>
    </View>
  )
}
