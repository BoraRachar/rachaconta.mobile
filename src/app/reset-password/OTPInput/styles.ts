import { theme } from '@/src/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  subTitle: {
    color: theme.colors.primaryColor,
    fontFamily: theme.fontFamily.bold,
    fontWeight: 'bold',
    fontSize: 24,
  },
  otpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  otpInput: {
    borderWidth: 1,
    borderColor: theme.colors.Gray[300],
    borderRadius: 6,
    color: theme.colors.Gray[700],
    fontFamily: theme.fontFamily.semiBold,
    fontSize: 30,
    width: 48,
    height: 48,
    textAlign: 'center',
  },
  otpSeparator: {
    width: 20,
    height: 5,
    backgroundColor: theme.colors.primaryColor,
    borderRadius: 6,
  },
  ressendCodeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    marginTop: 8,
  },
  ressendCodeText: {
    color: theme.colors.primaryColor,
    fontFamily: theme.fontFamily.regular,
    fontSize: 14,
  },
  ressendCodeLink: {
    color: theme.colors.primaryColor,
    fontFamily: theme.fontFamily.bold,
    fontSize: 14,
    textDecorationLine: 'underline',
  },
})
