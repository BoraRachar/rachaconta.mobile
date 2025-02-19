import { theme } from '@/src/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  termsContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  title: {
    fontFamily: theme.fontFamily.bold,
    fontSize: theme.sizes.fontSize30,
    lineHeight: 38,
    color: theme.colors.primaryColor,
  },
  text: {
    fontFamily: theme.fontFamily.regular,
    fontSize: theme.sizes.fontSize16,
    lineHeight: 24,
    color: theme.colors.primaryColor,
  },
  checkText: {
    fontFamily: theme.fontFamily.medium,
    fontSize: theme.sizes.fontSize16,
    lineHeight: 24,
    color: theme.colors.Gray[700],
  },
})
