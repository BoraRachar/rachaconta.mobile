import { StyleSheet } from 'react-native'
import { verticalScale, rem } from '@/src/utils/responsiveUtils'

import { theme } from '@/src/theme'

export const styles = StyleSheet.create({
  containerButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: verticalScale(12),
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.Gray[300],
  },
  text: {
    fontSize: rem(16),
    lineHeight: verticalScale(24),
    fontFamily: theme.fontFamily.regular,
    color: theme.colors.primaryColor,
  },
  textButton: {
    fontFamily: theme.fontFamily.semiBold,
  },
  addButton: {
    backgroundColor: theme.colors.third,
    borderRadius: 50,
    padding: 14,
  },
})
