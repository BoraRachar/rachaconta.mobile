import { StyleSheet } from 'react-native'
import { theme } from '@/src/theme'

export const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
  },
  progressBarBackground: {
    width: '90%',
    height: 8,
    backgroundColor: theme.colors.Gray[100],
    borderRadius: 8,
  },
  progressBarTranck: {
    height: 8,
    backgroundColor: theme.colors.Gray[500],
    borderRadius: 8,
  },
})
