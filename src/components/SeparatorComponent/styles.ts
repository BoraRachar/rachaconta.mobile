import { StyleSheet } from 'react-native'
import { theme } from '../../theme'

export const styles = StyleSheet.create({
  horizontalLineWithTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 12,
    marginTop: 40,
    marginBottom: 40,
  },
  horizontalLine: {
    flex: 1,
    height: 1,
    backgroundColor: theme.colors.Gray[200],
  },
  horizontalText: {
    marginHorizontal: 10,
    color: theme.colors.Gray[600],
    fontSize: 16,
    fontWeight: '400',
  },
})
