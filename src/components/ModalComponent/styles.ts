import { theme } from '@/src/theme'
import {
  horizontalScale,
  moderateScale,
  rem,
  verticalScale,
} from '@/src/utils/responsiveUtils'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    margin: horizontalScale(20),
    paddingTop: verticalScale(36),
    paddingBottom: verticalScale(16),
    backgroundColor: theme.colors.white,
    borderRadius: moderateScale(16),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  header: {
    paddingHorizontal: horizontalScale(32),
    gap: verticalScale(8),
  },
  title: {
    fontFamily: theme.fontFamily.bold,
    fontSize: rem(24),
    lineHeight: verticalScale(30),
    color: theme.colors.primaryColor,
  },
  description: {
    fontFamily: theme.fontFamily.regular,
    fontSize: rem(16),
    lineHeight: verticalScale(22),
    color: theme.colors.primaryColor,
    height: verticalScale(76),
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    gap: horizontalScale(16),
    paddingHorizontal: horizontalScale(16),
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    height: verticalScale(48),
  },
  buttonText: {
    fontFamily: theme.fontFamily.semiBold,
    fontSize: rem(16),
  },
})
