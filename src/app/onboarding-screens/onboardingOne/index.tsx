import { Text, View, Dimensions } from 'react-native'
import { Link, router } from 'expo-router'
import { styles } from '../styles'
import { styles as globalStyles } from '../../styles'
import { ButtonCustomizer } from '@/src/components/ButtonCustomizer'
import OnboardingScreenOneImage from '../../../assets/images/OnboardingScreenOneImage.svg'
import ArrowBack from '../../../assets/images/arrowBack.svg'

const windowHeight = Dimensions.get('window').height
const adaptativePaddingTopScreen = Number((windowHeight * 0.2 - 50).toFixed(0))

export default function OnboardingScreenOne() {
  return (
    <View style={{ position: 'relative' }}>
      <View style={{ padding: 6, position: 'absolute', zIndex: 1 }}>
        <Link href="/">
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
            <OnboardingScreenOneImage />
          </View>
          <Text style={styles.Title}>Rápido, fácil e seguro.</Text>
          <View style={styles.containerText}>
            <Text style={styles.Text}>
              Dividir as contas é moleza! {'\n'}Basta adicionar as pessoas,
              escolher o {'\n'}valor e pronto! O aplicativo faz o resto.
            </Text>
          </View>
        </View>
        <View>
          <ButtonCustomizer.Root
            type={'primary'}
            onPress={() => router.push('/onboarding-screens/onboardingTwo/')}
            customStyles={globalStyles.primaryButton}
          >
            <ButtonCustomizer.Title
              title="Como funciona?"
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
