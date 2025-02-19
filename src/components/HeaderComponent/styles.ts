import { StyleSheet } from 'react-native'
import { theme } from '@/src/theme'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 72,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    paddingHorizontal: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: theme.colors.secondaryColor,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 24,
    color: theme.colors.Gray[600],
  },
  titleContainer: {
    flex: 3,
    alignItems: 'center',
  },
  leftIcon: {
    flex: 1,
    alignItems: 'flex-start',
  },
  rightIcon: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
})
