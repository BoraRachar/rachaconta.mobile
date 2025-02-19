import { theme } from '@/src/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  subTitle: {
    color: theme.colors.primaryColor,
    fontFamily: theme.fontFamily.bold,
    fontSize: 30,
    lineHeight: 38,
  },
  description: {
    color: theme.colors.primaryColor,
    fontFamily: theme.fontFamily.regular,
    fontSize: 16,
    lineHeight: 24,
    marginTop: 8,
  },
})
