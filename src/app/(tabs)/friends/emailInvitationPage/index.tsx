import { useEffect, useState } from 'react'
import { ScrollView, View, Text, TextInput, Alert } from 'react-native'
import { Controller, FieldValues, useForm, useWatch } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import useKeyboardStatus from '@/src/utils/keyboardUtils'

import InputComponent from '@/src/components/InputComponent'
import { ButtonCustomizer } from '@/src/components/ButtonCustomizer'

import ArrowRightDisable from '@/src/assets/images/arrowRightDisable.svg'
import ArrowRight from '@/src/assets/images/arrowRight.svg'

import { styles as globalStyles } from '@/src/app/styles'
import { styles } from '../styles'
import { verticalScale } from '@/src/utils/responsiveUtils'
import { axiosPrivateClient } from '@/src/utils/axios'
import { useAuthStore } from '@/src/store/useAuthStore'
import { router } from 'expo-router'

// Constantes e validações
const DEFAULT_MESSAGE_TEMPLATE = (name: string) =>
  `Oi, ${name}! \n \nEstou usando o Bora Rachar, um app fácil e divertido para dividir despesas. Baixe e use meu link [link], registre gastos, divida de forma justa e comece a usar nas próximas aventuras!`

const schema = yup.object().shape({
  inputName: yup.string().required('O campo deve ser preenchido'),
  inputEmail: yup
    .string()
    .email('Insira um e-mail válido')
    .required('O campo deve ser preenchido'),
  inputMessage: yup.string(),
})

// Função para validar botão
const isButtonDisabled = (inputValues: (string | undefined)[]): boolean =>
  inputValues.filter((value) => value && value.trim()).length !== 2

// Função para enviar convite
const sendEmailInvitation = async (
  data: FieldValues,
  userCod: string | string[],
  onSuccess: (name: string) => void,
) => {
  try {
    const { inputEmail, inputName, inputMessage } = data

    const emailBody =
      inputMessage?.trim() === ''
        ? DEFAULT_MESSAGE_TEMPLATE(inputName)
        : inputMessage

    const response = await axiosPrivateClient.post('/amizade/add-amigo-email', {
      userCod,
      email: inputEmail,
      nomeConvidado: inputName,
      corpoEmail: emailBody,
    })

    if (response.status === 200) {
      onSuccess(inputName)
    }
  } catch (error) {
    if (error.response.data.statusCode === 400) {
      Alert.alert(error.response.data.errors[0].userMessage)
    }
  }
}

// Componentes auxiliares
const InputField = ({ label, name, control, errors }: any) => (
  <View>
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <InputComponent
          label={label}
          value={value}
          onChangeText={onChange}
          errorOrSucess={errors[name]?.message}
        />
      )}
    />
    {errors[name] && (
      <Text style={globalStyles.errorText}>{errors[name].message}</Text>
    )}
  </View>
)

const MessageTextArea = ({ control, name, placeholder }: any) => (
  <View style={styles.inputTextAreaContainer}>
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <TextInput
          onChangeText={onChange}
          value={value}
          multiline
          maxLength={200}
          maxFontSizeMultiplier={1.5}
          placeholder={placeholder}
          placeholderTextColor="#9BA5B7"
          style={styles.InputTextArea}
        />
      )}
    />
  </View>
)

// Página principal
export default function EmailInvitationPage() {
  const [isButtonDisabledState, setIsButtonDisabledState] = useState(true)
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })

  const { userCod } = useAuthStore()
  const isKeyboardVisible = useKeyboardStatus()

  const inputValues = useWatch({
    control,
    name: ['inputName', 'inputEmail'],
    defaultValue: { inputName: '[Amigo]', inputEmail: undefined },
  })

  // Monitora mudança nos campos para ativar/desativar botão
  useEffect(() => {
    setIsButtonDisabledState(isButtonDisabled(inputValues))
  }, [inputValues])

  // Submissão do formulário
  const handleFormSubmit = (data: FieldValues) =>
    sendEmailInvitation(data, userCod, (name) =>
      router.replace({
        pathname: './sucessInvitationEmailPage',
        params: { name },
      }),
    )

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <Text style={styles.title}>
          Que tal convidar alguém para rachar com você?
        </Text>

        {/* Formulário */}
        <InputField
          label="Nome do Amigo"
          name="inputName"
          control={control}
          errors={errors}
        />
        <InputField
          label="E-mail do Amigo"
          name="inputEmail"
          control={control}
          errors={errors}
        />
        <View style={{ marginTop: 24 }}>
          <Text style={styles.text}>Mensagem (Opcional)</Text>
          <MessageTextArea
            control={control}
            name="inputMessage"
            placeholder={DEFAULT_MESSAGE_TEMPLATE(inputValues[0])}
          />
          <Text style={[styles.text, { marginTop: 8, fontSize: 14 }]}>
            Você pode enviar uma mensagem personalizada ou a nossa mensagem
            padrão
          </Text>
        </View>

        {/* Botão */}
        {!isKeyboardVisible && (
          <View style={{ marginTop: verticalScale(50) }}>
            <ButtonCustomizer.Root
              type="primary"
              onPress={handleSubmit(handleFormSubmit)}
              disabled={isButtonDisabledState}
              customStyles={
                isButtonDisabledState
                  ? globalStyles.primaryButtonDisabled
                  : globalStyles.primaryButton
              }
            >
              <ButtonCustomizer.Title
                title="Enviar"
                customStyles={
                  isButtonDisabledState
                    ? globalStyles.primaryButtonTextDisabled
                    : globalStyles.primaryButtonText
                }
              />
              <ButtonCustomizer.Icon
                icon={isButtonDisabledState ? ArrowRightDisable : ArrowRight}
                customStyles={
                  isButtonDisabledState
                    ? globalStyles.primaryButtonIconDisabled
                    : globalStyles.primaryButtonIcon
                }
              />
            </ButtonCustomizer.Root>
          </View>
        )}
      </ScrollView>
    </View>
  )
}
