import { StyleSheet } from 'react-native'
import { theme } from '@/src/theme'

export const styles = StyleSheet.create({
  title: {
    fontFamily: theme.fontFamily.bold,
    fontWeight: 'bold',
    fontSize: theme.sizes.fontSize36,
    lineHeight: 42,
    color: theme.colors.Gray[600],
  },
  subtitle: {
    fontFamily: theme.fontFamily.regular,
    fontSize: theme.sizes.fontSize16,
    lineHeight: 24,
    color: theme.colors.Gray[600],
    marginTop: 8,
  },
  forgotPassword: {
    fontFamily: theme.fontFamily.semiBold,
    fontSize: theme.sizes.fontSize14,
    lineHeight: 20,
    color: theme.colors.Gray[600],
    textDecorationLine: 'underline',
    marginTop: 8,
  },
  signUp: {
    fontFamily: theme.fontFamily.regular,
    fontSize: theme.sizes.fontSize14,
    lineHeight: 20,
    color: theme.colors.Gray[600],
  },
  span: {
    fontFamily: theme.fontFamily.semiBold,
    fontSize: theme.sizes.fontSize14,
    color: theme.colors.Gray[700],
    lineHeight: 20,
    marginLeft: 4,
  },
})
