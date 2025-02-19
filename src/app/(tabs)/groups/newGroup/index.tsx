import { useState } from 'react'
import { Pressable, Text, TextInput, View } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import * as ImagePicker from 'expo-image-picker'
import { Image } from 'expo-image'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import Photograph from '@/src/assets/images/photograph.svg'
import Pencil from '@/src/assets/images/pencil.svg'

import { styles } from './styles'
import { theme } from '@/src/theme'

const schema = yup.object().shape({
  name: yup.string().required('O campo deve ser preenchido'),
  description: yup.string(),
})

export default function NewGroup() {
  const [image, setImage] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const {
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
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
      {/* Header */}
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
          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={styles.input}
                placeholder="Ex: Amigos do Bora"
                placeholderTextColor={theme.colors.fourth}
                value={value}
                onChangeText={onChange}
              />
            )}
          />
          {errors.name && (
            <Text style={styles.error}>{errors.name.message}</Text>
          )}
        </View>
      </View>

      {/* Category */}
      <View>
        <Text style={styles.label}>Categoria</Text>
        <View
          style={{
            borderWidth: 1,
            borderColor: theme.colors.primaryColor,
            borderRadius: 8,
            marginTop: 8,
          }}
        >
          <Picker
            selectedValue={selectedCategory}
            onValueChange={(itemValue) => {
              setSelectedCategory(itemValue)
            }}
            mode="dialog"
            dropdownIconColor={theme.colors.primaryColor}
            style={{
              width: '100%',
              height: 50,
              fontSize: 16,
              color: theme.colors.primaryColor,
            }}
          >
            <Picker.Item
              label="Escolha uma opção"
              value=""
              fontFamily={theme.fontFamily.medium}
              color={theme.colors.primaryColor}
            />
            <Picker.Item
              label="Publico"
              value="public"
              fontFamily={theme.fontFamily.medium}
              color={theme.colors.primaryColor}
            />
            <Picker.Item
              label="Privado"
              value="privado"
              fontFamily={theme.fontFamily.medium}
              color={theme.colors.primaryColor}
            />
          </Picker>
        </View>
      </View>

      {/* Descrição */}
      <View>
        <Text style={styles.label}>Descrição</Text>
        <Controller
          control={control}
          name="description"
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={[styles.input, { height: 100, textAlignVertical: 'top' }]}
              placeholder="Insira uma breve descrição"
              placeholderTextColor={theme.colors.fourth}
              maxLength={100}
              multiline
              numberOfLines={3}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.description && (
          <Text style={styles.error}>{errors.description.message}</Text>
        )}
      </View>
    </View>
  )
}
