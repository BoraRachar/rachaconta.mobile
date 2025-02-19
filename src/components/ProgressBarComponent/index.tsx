import { View } from 'react-native'
import { styles } from './styles'

interface ProgressBarComponentProps {
  totalSteps: number
  currentStep: number
}

export default function ProgressBarComponent({
  totalSteps,
  currentStep,
}: ProgressBarComponentProps) {
  const progressPercent = (currentStep / totalSteps) * 100

  return (
    <View style={styles.container}>
      <View style={styles.progressBarBackground}>
        <View
          style={[{ width: `${progressPercent}%` }, styles.progressBarTranck]}
        ></View>
      </View>
    </View>
  )
}
