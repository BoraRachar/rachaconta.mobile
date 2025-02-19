import { theme } from '@/src/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  title: {
    fontFamily: theme.fontFamily.bold,
    fontSize: theme.sizes.fontSize24,
    lineHeight: 32,
    color: theme.colors.primaryColor,
  },
  text: {
    fontFamily: theme.fontFamily.regular,
    fontSize: theme.sizes.fontSize16,
    lineHeight: 24,
    color: theme.colors.primaryColor,
    marginTop: 24,
  },
  link: {
    fontFamily: theme.fontFamily.semiBold,
    fontSize: theme.sizes.fontSize14,
    lineHeight: 20,
    color: theme.colors.Gray[600],
    textDecorationLine: 'underline',
    textAlign: 'center',
    marginTop: 16,
  },
})
