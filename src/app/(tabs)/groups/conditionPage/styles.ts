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
    lineHeight: verticalScale(22),
    color: theme.colors.primaryColor,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    backgroundColor: '#545F71',
  },
  checkmark: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
})
