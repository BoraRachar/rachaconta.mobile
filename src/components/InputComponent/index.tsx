import React from 'react'
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleProp,
  TextStyle,
} from 'react-native'
import { styles } from '../../app/styles'
import { theme } from '@/src/theme'
import WarningCircle from '../../assets/images/WarningCircle.svg'
import CheckCircle from '../../assets/images/CheckCircle.svg'
import Badge from '../BadgeComponent'

interface InputComponentProps {
  label?: string
  placeholder?: string
  secureTextEntry?: boolean
  value: string
  onChangeText: (text: string) => void
  errorOrSucess?: string
  errorInput?: boolean
  isValid?: boolean
  icon?: React.FC
  onIconPress?: () => void
  strength?: 'Fraca' | 'Média' | 'Forte'
  customStyle?: StyleProp<TextStyle>
}

const InputComponent: React.FC<InputComponentProps> = ({
  label,
  placeholder,
  secureTextEntry,
  value,
  onChangeText,
  errorOrSucess,
  errorInput,
  isValid,
  icon: Icon,
  onIconPress,
  strength,
  customStyle,
}) => {
  const getInputStyle = (): StyleProp<TextStyle> => {
    if (errorOrSucess || errorInput)
      return [styles.inputWrapper, styles.inputWrapperError]
    if (isValid) return [styles.inputWrapper, styles.inputWrapperSuccess]
    if (strength && value && value.trim().length > 0)
      return [styles.inputWrapper, customStyle]
    return styles.inputWrapper
  }

  return (
    <View style={styles.inputContainer}>
      <View style={styles.inputLabelContainer}>
        <Text style={styles.inputLabelText}>{label}</Text>
        {value && value.trim().length > 0 && strength && (
          <Badge strength={strength} />
        )}
      </View>
      <View style={[styles.inputWrapper, getInputStyle()]}>
        <TextInput
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          placeholderTextColor={theme.colors.Gray[500]}
          cursorColor={theme.colors.Gray[500]}
          value={value}
          onChangeText={onChangeText}
          style={styles.input}
        />
        {errorOrSucess || errorInput ? (
          <WarningCircle />
        ) : isValid ? (
          <CheckCircle />
        ) : Icon ? (
          <Pressable onPress={onIconPress} style={styles.iconForm}>
            <Icon />
          </Pressable>
        ) : null}
      </View>
    </View>
  )
}

export default InputComponent
