import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import OpenEye from '@/src/assets/images/openEye.svg'
import CloseEye from '@/src/assets/images/closeEye.svg'
import { styles } from './style'

interface Item {
  id: number
  title: string
  value: string
}

export const CarouselItem: React.FC<{ item: Item }> = ({ item }) => {
  const [visible, setVisible] = useState(true)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.content}>
        <Text style={styles.value}>
          {`R$ ${visible ? '****' : item.value}`}
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setVisible(!visible)}
        >
          {visible ? <CloseEye /> : <OpenEye width={24} height={24} />}
        </TouchableOpacity>
      </View>
    </View>
  )
}
