import { StyleSheet } from 'react-native'
import { theme } from '@/src/theme'

import {
  horizontalScale,
  rem,
  verticalScale,
} from '@/src/utils/responsiveUtils'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: horizontalScale(24),
    paddingVertical: verticalScale(24),
  },
  title: {
    fontFamily: theme.fontFamily.bold,
    fontSize: rem(24),
    lineHeight: 24,
    color: theme.colors.primaryColor,
    paddingVertical: verticalScale(12),
  },
  containerButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: verticalScale(12),
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.Gray[300],
  },
  text: {
    fontFamily: theme.fontFamily.semiBold,
    fontSize: rem(16),
    lineHeight: verticalScale(24),
    color: theme.colors.primaryColor,
  },
  addButton: {
    backgroundColor: theme.colors.third,
    borderRadius: 50,
    padding: 14,
  },
})
