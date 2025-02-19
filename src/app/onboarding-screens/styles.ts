import { StyleSheet } from 'react-native'
import { theme } from '@/src/theme'

export const styles = StyleSheet.create({
  onboardingContainer: {
    justifyContent: 'space-between',
    height: '100%',
    paddingHorizontal: 16,
  },
  containerText: {
    paddingTop: 12,
  },
  buttonArea: {
    width: '100%',
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: theme.colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  linkContainer: {
    paddingTop: 10,
    marginBottom: 20,
  },
  onboardingLink: {
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  Title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: '700',
    color: theme.colors.Gray[600],
  },
  Text: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
    color: theme.colors.Gray[600],
  },
})
