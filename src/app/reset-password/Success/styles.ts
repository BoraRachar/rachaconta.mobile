import { theme } from '@/src/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  subtitle: {
    fontFamily: theme.fontFamily.bold,
    fontSize: 30,
    fontWeight: 'bold',
    color: theme.colors.primaryColor,
    lineHeight: 38,
  },
  description: {
    fontFamily: theme.fontFamily.regular,
    fontSize: 16,
    color: theme.colors.primaryColor,
    lineHeight: 24,
    marginTop: 8,
  },
})
