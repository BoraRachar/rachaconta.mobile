import { View } from 'react-native'
import { styles } from './styles'
import { styles as globalStyles } from '../styles'
import { useStepStore } from '@/src/store/StepStore'
import { useState, useEffect } from 'react'
import Header from '../../components/HeaderComponent'
import ProgressBarComponent from '../../components/ProgressBarComponent'
import NameInput from './nameInput'
import EmailInput from './emailInput'
import UserNameInput from './UserNameInput'
import PasswordInput from './PasswordInput'
import TermosLegais from '../termos/termos-legais'
import TermosServicos from '../termos/termos-servicos'
import PoliticasPrivacidade from '../termos/politica-privacidade'
import ArrowBack from '../../assets/images/arrowBack.svg'

export default function CreateUser() {
  const totalSteps = 8
  const [isVisible, setIsVisible] = useState(false)
  const { step, decreaseStep } = useStepStore()

  useEffect(() => {
    if (step > 1 && step <= totalSteps) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }, [step])

  function handleBackButton() {
    if (step > 1 && step <= totalSteps) {
      decreaseStep()
      setIsVisible(true)
    }
  }

  let formStep

  switch (step) {
    case 1:
      formStep = <NameInput />
      break
    case 2:
      formStep = <EmailInput />
      break
    case 3:
      formStep = <UserNameInput />
      break
    case 4:
      formStep = <PasswordInput />
      break
    case 5:
      formStep = <TermosLegais />
      break
    case 6:
      formStep = <TermosServicos />
      break
    case 7:
      formStep = <PoliticasPrivacidade />
      break
  }

  return (
    <View style={styles.container}>
      <Header
        title="Criar conta"
        leftIcon={
          isVisible
            ? { icon: <ArrowBack />, onPress: handleBackButton }
            : undefined
        }
      />
      <ProgressBarComponent totalSteps={totalSteps} currentStep={step} />
      <View style={globalStyles.formContainer}>{formStep}</View>
    </View>
  )
}
