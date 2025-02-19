import { useState } from 'react'
import { View } from 'react-native'

import Header from '@/src/components/HeaderComponent'
import ProgressBarComponent from '@/src/components/ProgressBarComponent'

import OTPInput from './OTPInput'
import NewPasswordInput from './NewPasswordInput'

import { styles as globalStyles } from '@/src/app/styles'

export default function ResetPassword() {
  const [step, setStep] = useState<number>(1)

  const totalSteps = 3

  const increaseStep = () => setStep(step + 1)

  let formStep

  switch (step) {
    case 1:
      formStep = <OTPInput increaseStep={increaseStep} />
      break
    case 2:
      formStep = <NewPasswordInput />
      break
    default:
      formStep = <OTPInput increaseStep={increaseStep} />
      break
  }

  return (
    <View style={{ flex: 1 }}>
      <Header title="Redefinir senha" />
      <ProgressBarComponent totalSteps={totalSteps} currentStep={step} />
      <View style={globalStyles.formContainer}>{formStep}</View>
    </View>
  )
}
