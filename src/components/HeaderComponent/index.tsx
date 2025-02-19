import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { styles } from './styles'

interface IconProps {
  icon: React.ReactNode
  onPress: () => void
}

interface HeaderProps {
  title: string
  leftIcon?: IconProps
  rightIcon?: IconProps[]
}
const Header: React.FC<HeaderProps> = ({ title, leftIcon, rightIcon }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftIcon}>
        {leftIcon && (
          <Pressable onPress={leftIcon.onPress}>{leftIcon.icon}</Pressable>
        )}
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.rightIcon}>
        {rightIcon?.map((icon, index) => (
          <Pressable key={index} onPress={icon.onPress}>
            {icon.icon}
          </Pressable>
        ))}
      </View>
    </View>
  )
}

export default Header
