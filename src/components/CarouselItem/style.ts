import { StyleSheet, Dimensions } from 'react-native'

import { theme } from '@/src/theme'
const { width } = Dimensions.get('screen')

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: 333,
    height: 131,
    borderRadius: 16,
    backgroundColor: theme.colors.third,
    gap: 10,
    paddingVertical: 34,
    paddingHorizontal: 15,
    marginHorizontal: 16,
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: theme.fontFamily.regular,
    fontSize: theme.sizes.fontSize14,
    color: theme.colors.Gray[500],
  },
  value: {
    fontFamily: theme.fontFamily.bold,
    fontSize: 32,
    width: width * 0.7,
    color: theme.colors.Gray[500],
  },
  button: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
