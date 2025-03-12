import { Text, TouchableOpacity, View } from 'react-native'
import styles from './styles'
import { router } from 'expo-router'
import { ReactNode } from 'react'
import { Href } from 'expo-router'

interface LinkButtonProps {
  text: string
  icon: ReactNode
  link: Href<string | object>
}

export default function ActionLinkButton({ text, icon, link }: LinkButtonProps) {
  return (
    <View style={styles.containerButton}>
      <Text style={[styles.text, styles.textButton]}>{text}</Text>
      <TouchableOpacity onPress={() => router.push(link)}>
        <View style={styles.addButton}>{icon}</View>
      </TouchableOpacity>
    </View>
  )
}