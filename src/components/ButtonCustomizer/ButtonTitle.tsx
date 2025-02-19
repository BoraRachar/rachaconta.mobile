import { Text, StyleProp, TextStyle } from 'react-native'
interface ButtonTitleProps {
  title: string
  customStyles: StyleProp<TextStyle>
}

export function ButtonTitle({ title, customStyles }: ButtonTitleProps) {
  return <Text style={customStyles}>{title}</Text>
}
