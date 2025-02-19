import { ElementType } from 'react'
import { StyleProp, ViewStyle, ImageStyle } from 'react-native'

interface ButtonIconProps {
  icon: ElementType
  customStyles?: StyleProp<ViewStyle | ImageStyle>
}

export function ButtonIcon({ icon: Icon, customStyles }: ButtonIconProps) {
  return <Icon style={customStyles} />
}
