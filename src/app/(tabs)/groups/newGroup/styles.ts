import { theme } from '@/src/theme'
import {
  horizontalScale,
  rem,
  verticalScale,
} from '@/src/utils/responsiveUtils'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: verticalScale(24),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: horizontalScale(18),
  },
  imageContainer: {
    width: 80,
    height: 80,
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: theme.colors.primaryColor,
    backgroundColor: theme.colors.third,
    position: 'relative',
  },
  editIcon: {
    backgroundColor: theme.colors.primaryColor,
    padding: 6,
    borderRadius: 3,
    position: 'absolute',
    bottom: -10,
    right: -10,
  },
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
})
