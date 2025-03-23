import { theme } from "@/src/theme";
import { horizontalScale, rem, verticalScale } from "@/src/utils/responsiveUtils";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.third,
    paddingVertical: verticalScale(16),
  },
  titleItem: {
    fontFamily: theme.fontFamily.regular,
    fontSize: rem(16),
    lineHeight: 22,
    color: theme.colors.primaryColor,
  },
  textItem: {
    fontFamily: theme.fontFamily.bold,
    fontSize: rem(16),
    lineHeight: 22,
    color: theme.colors.primaryColor,
    maxWidth: horizontalScale(200),
  },
  category: {
    alignSelf: 'flex-start',
    backgroundColor: theme.colors.third,
    borderRadius: 24,
    paddingVertical: verticalScale(8),
    paddingHorizontal: horizontalScale(16),
    marginTop: verticalScale(4),
  },
  participantsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.third,
    paddingVertical: verticalScale(16),
    gap: horizontalScale(16),
  }

})

export default styles