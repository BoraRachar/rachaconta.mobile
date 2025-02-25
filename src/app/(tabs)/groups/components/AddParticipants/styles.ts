import { theme } from '@/src/theme'
import { rem } from '@/src/utils/responsiveUtils'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  label: {
    fontFamily: theme.fontFamily.regular,
    fontSize: rem(14),
    color: theme.colors.primaryColor,
  },
  input: {
    borderWidth: 1,
    borderColor: theme.colors.primaryColor,
    borderRadius: 8,
    padding: 12,
    width: '100%',
  },
  participantsContainer: {
    borderWidth: 1,
    borderColor: theme.colors.primaryColor,
    borderRadius: 8,
    padding: 12,
  }
})
