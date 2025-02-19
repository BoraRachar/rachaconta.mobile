import { Pressable, Text, TextInput, View } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import { Image } from 'expo-image'

import Photograph from '@/src/assets/images/photograph.svg'
import Pencil from '@/src/assets/images/pencil.svg'
import { styles } from './styles'
import { useState } from 'react'
import { theme } from '@/src/theme'

export default function NewGroup() {
  const [image, setImage] = useState<string | null>(null)
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
      base64: true,
    })

    if (!result.canceled) {
      setImage(result.assets[0].uri)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.imageContainer}>
          {image ? (
            <Image
              source={{ uri: image }}
              style={{ width: '100%', height: '100%' }}
              alt="imagem do grupo"
            />
          ) : (
            <Photograph width={32} height={32} />
          )}

          <Pressable style={styles.editIcon} onPress={pickImage}>
            <Pencil width={12} height={12} />
          </Pressable>
        </View>
        <View style={{ flex: 1, gap: 8 }}>
          <Text style={styles.label}>Nome</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: Amigos do Bora"
            placeholderTextColor={theme.colors.fourth}
          />
        </View>
      </View>
    </View>
  )
}
