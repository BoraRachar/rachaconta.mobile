import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { Slot } from 'expo-router'

import {
  useFonts,
  Inter_400Regular as InterRegular,
  Inter_500Medium as InterMedium,
  Inter_600SemiBold as InterSemiBold,
  Inter_700Bold as InterBold,
} from '@expo-google-fonts/inter'

export default function Layout() {
  const [fontsLoaded] = useFonts({
    InterRegular,
    InterMedium,
    InterSemiBold,
    InterBold,
  })

  if (!fontsLoaded) return

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Slot />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
