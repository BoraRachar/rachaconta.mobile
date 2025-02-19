import { theme } from '@/src/theme'
import {
  horizontalScale,
  verticalScale,
  rem,
  moderateScale,
} from '@/src/utils/responsiveUtils'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: horizontalScale(24),
    paddingVertical: verticalScale(24),
  },
  resumeContent: {
    gap: verticalScale(20),
  },
  title: {
    fontFamily: theme.fontFamily.bold,
    fontSize: rem(24),
    lineHeight: verticalScale(30),
    color: theme.colors.primaryColor,
    marginTop: verticalScale(16),
  },
  text: {
    fontSize: rem(16),
    lineHeight: verticalScale(24),
    fontFamily: theme.fontFamily.regular,
    color: theme.colors.primaryColor,
  },
  textSemiBold: {
    fontFamily: theme.fontFamily.semiBold,
  },
  textBold: {
    fontFamily: theme.fontFamily.bold,
  },
  textButton: {
    fontFamily: theme.fontFamily.semiBold,
  },
  containerText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tabLabelActive: {
    fontSize: rem(16),
    fontFamily: theme.fontFamily.semiBold,
  },
  containerButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: verticalScale(12),
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.Gray[300],
    marginTop: verticalScale(22),
  },
  addButton: {
    backgroundColor: theme.colors.third,
    borderRadius: 50,
    padding: 14,
  },
  contentFriend: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: horizontalScale(16),
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.third,
    paddingVertical: verticalScale(12),
  },
  avatarContainer: {
    backgroundColor: theme.colors.third,
    borderRadius: 50,
    padding: 14,
  },
  avatarImage: {
    borderRadius: 50,
    resizeMode: 'cover',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: horizontalScale(8),
    borderWidth: 1,
    borderRadius: 8,
    borderColor: theme.colors.Gray[300],
    paddingHorizontal: horizontalScale(16),
    paddingVertical: verticalScale(12),
  },
  input: {
    width: '100%',
    height: verticalScale(24),
    fontFamily: theme.fontFamily.regular,
    fontSize: rem(16),
    lineHeight: verticalScale(24),
    color: theme.colors.Gray[900],
  },
  error: {
    color: theme.colors.Error[500],
    fontSize: rem(12),
    lineHeight: verticalScale(16),
    marginTop: verticalScale(8),
  },
  subTitle: {
    fontFamily: theme.fontFamily.semiBold,
    fontSize: rem(20),
    lineHeight: verticalScale(24),
    color: theme.colors.primaryColor,
  },
  inviteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: horizontalScale(16),
  },
  iconContainer: {
    borderWidth: 2,
    borderColor: theme.colors.Gray[500],
    borderRadius: 100,
    padding: moderateScale(12),
  },
  renderItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: horizontalScale(16),
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.third,
    paddingVertical: verticalScale(12),
  },
  inputTextAreaContainer: {
    borderWidth: 1,
    borderColor: theme.colors.Gray[300],
    borderRadius: 8,
    width: '100%',
    height: verticalScale(174),
    padding: moderateScale(12),
  },
  InputTextArea: {
    fontFamily: theme.fontFamily.regular,
    fontSize: rem(14),
    lineHeight: verticalScale(24),
    textAlignVertical: 'top',
  },
  invitationsCardcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.Gray[300],
    paddingVertical: verticalScale(16),
  },
  invitationsCardContainerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: horizontalScale(16),
  },
})
