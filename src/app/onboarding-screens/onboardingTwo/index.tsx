import { Text, View, Dimensions } from 'react-native'
import { Link, router } from 'expo-router'
import { styles } from '../styles'
import { styles as globalStyles } from '../../styles'
import { ButtonCustomizer } from '@/src/components/ButtonCustomizer'
import OnboardingScreenTwoImage from '../../../assets/images/OnboardingScreenTwoImage.svg'
import ArrowBack from '../../../assets/images/arrowBack.svg'

const windowHeight = Dimensions.get('window').height
const adaptativePaddingTopScreen = Number((windowHeight * 0.2 - 50).toFixed(0))

export default function OnboardingScreenTwo() {
  return (
    <View style={{ position: 'relative' }}>
      <View style={{ padding: 6, position: 'absolute', zIndex: 1 }}>
        <Link href="/onboarding-screens/onboardingOne/">
          <ArrowBack />
        </Link>
      </View>
      <View
        style={[
          { paddingTop: adaptativePaddingTopScreen },
          styles.onboardingContainer,
        ]}
      >
        <View style={{ marginBottom: 20 }}>
          <View style={{ alignItems: 'center', marginBottom: 24 }}>
            <OnboardingScreenTwoImage />
          </View>
          <Text style={styles.Title}>Calcule quanto cada um deverá pagar.</Text>
          <View style={styles.containerText}>
            <Text style={styles.Text}>
              Use a nossa calculadora de divisões para {'\n'}despesas rápidas
              como uma conta de {'\n'}restaurante.
            </Text>
          </View>
        </View>
        <View>
          <ButtonCustomizer.Root
            type={'primary'}
            onPress={() => router.push('/onboarding-screens/onboardingThree/')}
            customStyles={globalStyles.primaryButton}
          >
            <ButtonCustomizer.Title
              title="E para gastos mais complexos?"
              customStyles={globalStyles.primaryButtonText}
            />
          </ButtonCustomizer.Root>
          <View style={styles.linkContainer}>
            <View style={styles.buttonArea}>
              <View style={globalStyles.textButton}>
                <Link push href="/">
                  <Text style={globalStyles.textButtonText}>Pular</Text>
                </Link>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}
