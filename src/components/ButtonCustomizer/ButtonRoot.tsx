import React from 'react'
import { ViewStyle, View, Pressable } from 'react-native'
import { styles } from '../../app/styles'

interface ButtonRootProps {
  type:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'textButton'
    | 'primaryHalfWidth'
    | 'tertiaryHalfWidth'
  customStyles?: ViewStyle | ViewStyle[]
  disabled?: boolean
  onPress: () => void
  children: React.ReactNode
}

export function ButtonRoot({
  type,
  children,
  customStyles,
  disabled,
  onPress,
}: ButtonRootProps) {
  const handleClickButton = () => {
    onPress()
  }

  const buttonStyle =
    type === 'primary'
      ? styles.primaryButton
      : type === 'secondary'
        ? styles.secondaryButton
        : type === 'tertiary'
          ? styles.tertiaryButton
          : type === 'textButton'
            ? styles.textButton
            : type === 'tertiaryHalfWidth'
              ? styles.tertiaryButtonHalfWidth
              : type === 'primaryHalfWidth'
                ? styles.primaryButtonHalfWidth
                : {}

  return (
    <Pressable
      onPress={handleClickButton}
      style={[buttonStyle, customStyles]}
      disabled={disabled}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {children}
      </View>
    </Pressable>
  )
}
