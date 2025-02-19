import { useState } from 'react'
import { Text, View, TextInput, Pressable, ScrollView } from 'react-native'
import { router } from 'expo-router'
import { Controller, FieldValues, useForm, useWatch } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { searchUser } from '../actions'
import { useAuthStore } from '@/src/store/useAuthStore'
import useKeyboardStatus from '@/src/utils/keyboardUtils'

import { ButtonCustomizer } from '@/src/components/ButtonCustomizer'

import SearchIcon from '@/src/assets/images/search.svg'

import { styles as globalStyles } from '@/src/app/styles'
import { styles } from '../styles'
import { verticalScale } from '@/src/utils/responsiveUtils'
import LinkToInviteByEmailPage from '../components/LinkToInviteByEmailPage'

// validação yup
const yupSchema = yup.object().shape({
  inputSearch: yup.string().required('O campo deve ser preenchido'),
})

export default function AddNewFriendsPage() {
  const [userNotFound, setUserNotFound] = useState(false)
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(yupSchema),
  })
  const { userCod } = useAuthStore()
  const isKeyboardVisible = useKeyboardStatus()

  const searchQuery = useWatch({
    control,
    name: 'inputSearch',
    defaultValue: '',
  })

  const isSearchEnable = searchQuery.trim().length > 0

  const onSubmit = async (data: FieldValues) => {
    try {
      const response = await searchUser(data.inputSearch, userCod)

      if (response.statusCode === 200) {
        const userList = JSON.stringify(response.data)
        router.push({
          pathname: '/friends/addNewFriendsPage/friendSearchResults',
          params: { userList, userCod },
        })
      } else {
        setUserNotFound(true)
      }
    } catch (error) {
      setUserNotFound(true)
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'flex-start',
        }}
        keyboardShouldPersistTaps="handled"
      >
        <View>
          <Text style={styles.title}>Encontre amigos que já usam o app!</Text>

          <View style={{ marginTop: verticalScale(16) }}>
            <Text style={[styles.text, styles.textSemiBold]}>
              E-mail ou nome de usuário
            </Text>

            <View style={styles.inputContainer}>
              <SearchIcon width={20} height={20} />
              <Controller
                control={control}
                name="inputSearch"
                rules={{ required: true }}
                render={({ field: { value, onChange, onBlur } }) => (
                  <TextInput
                    value={value}
                    style={styles.input}
                    cursorColor="#000"
                    onChangeText={onChange}
                    onBlur={onBlur}
                  />
                )}
              />
            </View>
            {errors.inputSearch && (
              <Text style={styles.error}>{errors.inputSearch.message}</Text>
            )}
          </View>
          {userNotFound && (
            <View style={{ marginTop: verticalScale(48) }}>
              <Text style={styles.subTitle}>
                Ops! Parece que essa pessoa ainda não está no Bora Rachar!
              </Text>
              <LinkToInviteByEmailPage />
            </View>
          )}
        </View>
      </ScrollView>

      {!isKeyboardVisible && (
        <View>
          <ButtonCustomizer.Root
            type="primary"
            onPress={handleSubmit(onSubmit)}
            customStyles={
              isSearchEnable
                ? globalStyles.primaryButton
                : globalStyles.primaryButtonDisabled
            }
            disabled={!isSearchEnable}
          >
            <ButtonCustomizer.Title
              title="Buscar"
              customStyles={globalStyles.primaryButtonText}
            />
          </ButtonCustomizer.Root>
        </View>
      )}
    </View>
  )
}
