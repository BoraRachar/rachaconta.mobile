import { FlatList, Pressable, Text, View } from 'react-native'
import { router } from 'expo-router'

import { ButtonCustomizer } from '@/src/components/ButtonCustomizer'
import { politicaPrivacidade } from './politicaPrivacidade'

import UnCheckSquare from '@/src/assets/images/unCheckSquare.svg'
import CheckSquare from '@/src/assets/images/checkSquare.svg'
import ArrowRight from '@/src/assets/images/arrowRight.svg'
import ArrowRightDisable from '@/src/assets/images/arrowRightDisable.svg'

import { theme } from '@/src/theme'
import { styles as globalStyles } from '@/src/app/styles'
import { styles } from '../styles'
import { useState } from 'react'
import useStore from '@/src/store/CreateUserstore'
import { axiosClient } from '@/src/utils/axios'
import { AxiosError } from 'axios'
import { ErrorResponse } from '@/src/interfaces/types'

export default function PoliticasPrivacidade() {
  const [isChecked, setIsChecked] = useState<boolean>(false)
  const { addUser, user } = useStore()

  const handleIsChecked = () => {
    setIsChecked((prevState) => {
      const newState = !prevState
      addUser({ politicasPrivacidade: newState })
      return newState
    })
  }

  const handleCreateUser = async () => {
    try {
      if (user.politicasPrivacidade && user.termosUso) {
        await axiosClient.post('user', user)
        router.push('/termos/sucess')
      }
    } catch (err) {
      const error = err as AxiosError
      const responseData = error.response?.data as ErrorResponse
      const userMessage = responseData.errors[0]?.userMessage
      console.log(userMessage)
    }
  }

  return (
    <View style={styles.termsContainer}>
      <View style={{ gap: 24 }}>
        <Text style={styles.title}>Políticas de Privacidade</Text>
        <Text style={styles.text}>
          Sua privacidade é importante para nós. Esta Política de Privacidade
          descreve como coletamos, usamos e divulgamos suas informações
          pessoais.
        </Text>
      </View>

      <FlatList
        style={{ marginTop: 24 }}
        data={politicaPrivacidade}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', gap: 5 }}>
            <Text style={[styles.text, { fontFamily: theme.fontFamily.bold }]}>
              {`${item.id}.`}
            </Text>
            <Text style={styles.text}>
              <Text
                style={{ fontFamily: theme.fontFamily.bold }}
              >{`${item.subtitle} `}</Text>
              {item.text}
            </Text>
          </View>
        )}
      />
      <View
        style={{
          width: '100%',
          height: 2,
          borderRadius: 1,
          backgroundColor: theme.colors.Gray[200],
          marginVertical: 32,
        }}
      ></View>

      <Pressable
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 5,
          marginBottom: 24,
        }}
        onPress={handleIsChecked}
      >
        {isChecked ? <CheckSquare /> : <UnCheckSquare />}
        <Text style={styles.checkText}>
          Eu li e concordo com as Políticas de Privacidade
        </Text>
      </Pressable>

      <ButtonCustomizer.Root
        type="primary"
        onPress={handleCreateUser}
        disabled={!isChecked}
        customStyles={
          isChecked
            ? globalStyles.primaryButton
            : globalStyles.primaryButtonDisabled
        }
      >
        <ButtonCustomizer.Title
          title="Criar conta"
          customStyles={
            isChecked
              ? globalStyles.primaryButtonText
              : globalStyles.primaryButtonTextDisabled
          }
        />
        <ButtonCustomizer.Icon
          icon={isChecked ? ArrowRight : ArrowRightDisable}
        />
      </ButtonCustomizer.Root>
    </View>
  )
}
